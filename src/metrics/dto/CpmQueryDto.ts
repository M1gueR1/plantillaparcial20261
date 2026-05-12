import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class CpmQueryDto {

  @Type(() => Number)
  @IsInt()
  @Min(0)             
  cost: number;


  @Type(() => Number)
  @IsInt()
  @Min(1)             
  impressions: number;
}