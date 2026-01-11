import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { User } from "../users/user.entity";

@Entity({ name: "bets" })
export class Bet {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { nullable: false })
  user: User;

  @Column({ type: "bigint" })
  amount: number;

  @Column({ type: "jsonb" })
  picks: number[];

  @Column()
  hits: number;

  @Column({ type: "bigint" })
  payout: number;

  @CreateDateColumn()
  createdAt: Date;
}
