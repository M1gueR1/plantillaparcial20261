import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, Min } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  username: string;

  @IsOptional()
  bio: string;

  @Type(() => Number)
  @IsInt()
  @Min(0) 
  @IsOptional()            
  followers?: number = 0;
}