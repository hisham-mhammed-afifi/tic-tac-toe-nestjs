import { Expose } from 'class-transformer';

export class PlayerDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;
}