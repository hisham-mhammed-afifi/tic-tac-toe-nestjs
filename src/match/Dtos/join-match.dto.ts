import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class JoinMatchDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  secondPlayerId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  currentPlayerId: string;
}
