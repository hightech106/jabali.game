import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  Get,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt.guard";
import { BetsService } from "./bets.service";
import { PlaceBetDto } from "./dto/place-bet.dto";

@Controller("bets")
export class BetsController {
  constructor(private betsService: BetsService) {}

  @UseGuards(JwtAuthGuard)
  @Post("keno")
  placeKeno(@Req() req, @Body() dto: PlaceBetDto) {
    return this.betsService.placeKenoBet(
      req.user.userId,
      dto.amount,
      dto.picks
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async history(@Req() req) {
    return this.betsService.findByUser(req.user.userId);
  }
}
