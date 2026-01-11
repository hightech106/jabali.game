import { IsArray, IsInt, IsString, Min } from 'class-validator';

export class KenoBetDto {
  @IsInt()
  @Min(1)
  betAmount: number;

  @IsArray()
  pickedNumbers: number[];

  @IsString()
  clientSeed: string;

  @IsInt()
  nonce: number;
}
