import {
  Injectable,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, DataSource } from "typeorm";
import { Bet } from "./bet.entity";
import { UsersService } from "../users/users.service";

@Injectable()
export class BetsService {
  constructor(
    @InjectRepository(Bet)
    private betsRepo: Repository<Bet>,
    private usersService: UsersService,
    private dataSource: DataSource
  ) {}

  async placeKenoBet(
    userId: number,
    amount: number,
    picks: number[]
  ) {
    return this.dataSource.transaction(async (manager) => {
      const user = await this.usersService.findById(userId);

      if (user.balance < amount) {
        throw new BadRequestException("Insufficient balance");
      }

      // Deduct balance
      user.balance -= amount;
      await manager.save(user);

      // Generate result
      const drawn = this.drawNumbers();
      const hits = picks.filter((n) => drawn.includes(n)).length;
      const payout = this.calculatePayout(amount, hits);

      // Credit payout
      user.balance += payout;
      await manager.save(user);

      // Store bet
      const bet = manager.create(Bet, {
        user,
        amount,
        picks,
        hits,
        payout,
      });

      await manager.save(bet);

      return {
        betId: bet.id,
        hits,
        payout,
        balance: user.balance,
        drawn,
      };
    });
  }

  private drawNumbers(): number[] {
    const numbers = Array.from({ length: 40 }, (_, i) => i + 1);
    return numbers.sort(() => 0.5 - Math.random()).slice(0, 10);
  }

  private calculatePayout(amount: number, hits: number): number {
    const multipliers: Record<number, number> = {
      0: 0,
      1: 0,
      2: 0.5,
      3: 2,
      4: 10,
      5: 50,
    };

    return Math.floor(amount * (multipliers[hits] || 0));
  }

  async findByUser(userId: number) {
    return this.betsRepo.find({
      where: { user: { id: userId } },
      order: { createdAt: "DESC" },
    });
  }
  
}
