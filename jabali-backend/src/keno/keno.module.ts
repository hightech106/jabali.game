import { Module } from '@nestjs/common';
import { KenoController } from './keno.controller';
import { KenoService } from './keno.service';
import { BetsModule } from '../bets/bets.module';

@Module({
  imports: [BetsModule],
  controllers: [KenoController],
  providers: [KenoService],
})
export class KenoModule {}
