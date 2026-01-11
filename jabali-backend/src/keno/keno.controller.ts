import { Controller, Post, Body } from '@nestjs/common';
import { KenoService } from './keno.service';
import { KenoBetDto } from './dto/keno.dto';

@Controller('keno')
export class KenoController {
  constructor(private readonly kenoService: KenoService) {}

  @Post('bet')
  placeBet(@Body() dto: KenoBetDto) {
    return this.kenoService.placeBet(
      dto.betAmount,
      dto.pickedNumbers,
      dto.clientSeed,
      dto.nonce,
    );
  }
}
