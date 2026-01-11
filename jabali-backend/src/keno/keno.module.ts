import { Module } from '@nestjs/common';
import { KenoController } from './keno.controller';
import { KenoService } from './keno.service';

@Module({
  controllers: [KenoController],
  providers: [KenoService],
})
export class KenoModule {}
