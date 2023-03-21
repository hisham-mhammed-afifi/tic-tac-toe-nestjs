import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMatchDto {
  @IsString()
  @IsNotEmpty()
  firstPlayerId: string;

  @IsString()
  @IsOptional()
  secondPlayerId: string;

  @IsString()
  @IsOptional()
  currentPlayerId: string;
}
