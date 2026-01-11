import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>
  ) {}

  async findById(id: number): Promise<User> {
    const user = await this.repo.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  }

  findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  create(email: string, passwordHash: string) {
    const user = this.repo.create({
      email,
      passwordHash,
      balance: 10000, // demo starting balance
    });
    return this.repo.save(user);
  }
}
