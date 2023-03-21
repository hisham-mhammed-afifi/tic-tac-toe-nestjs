import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMatchDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstPlayerId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  secondPlayerId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  currentPlayerId: string;
}
