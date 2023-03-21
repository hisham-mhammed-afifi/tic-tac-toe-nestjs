import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class JoinMatchDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  secondPlayerId: string;

  @IsString()
  @IsOptional()
  currentPlayerId: string;
}
