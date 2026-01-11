import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { KenoService } from './keno.service';
import { KenoBetDto } from './dto/keno.dto';
import { BetsService } from '../bets/bets.service';

@Controller('keno')
export class KenoController {
  constructor(
    private readonly kenoService: KenoService,
    private readonly betsService: BetsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('bet')
  async placeBet(@Req() req, @Body() dto: KenoBetDto) {
    const userId = req.user.userId;
    
    // Calculate result using provably fair system
    const drawn = this.kenoService.drawNumbers(dto.clientSeed, dto.nonce);
    const matches = dto.pickedNumbers.filter(n => drawn.includes(n)).length;
    const multiplier = this.kenoService.getMultiplier(dto.pickedNumbers.length, matches);
    const payout = dto.betAmount * multiplier;

    // Save bet using BetsService
    const result = await this.betsService.placeKenoBetWithResult(
      userId,
      dto.betAmount,
      dto.pickedNumbers,
      drawn,
      matches,
      payout,
    );

    return {
      drawnNumbers: drawn,
      matches,
      multiplier,
      payout,
      win: payout > 0,
      balance: result.balance,
    };
  }
}
