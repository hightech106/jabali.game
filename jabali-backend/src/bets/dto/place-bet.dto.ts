import { IsArray, IsInt, Min, ArrayMinSize } from "class-validator";

export class PlaceBetDto {
  @IsInt()
  @Min(1)
  amount: number;

  @IsArray()
  @ArrayMinSize(1)
  picks: number[];
}
