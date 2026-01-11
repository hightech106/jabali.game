import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bet } from "./bet.entity";
import { BetsService } from "./bets.service";
import { BetsController } from "./bets.controller";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [TypeOrmModule.forFeature([Bet]), UsersModule],
  providers: [BetsService],
  controllers: [BetsController],
})
export class BetsModule {}
