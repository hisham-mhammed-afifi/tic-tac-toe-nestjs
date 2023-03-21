import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdatePlayerDto {
  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  password: string;
}
