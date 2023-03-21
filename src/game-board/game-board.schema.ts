import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GameBoardDocument = GameBoard & Document;

@Schema()
export class GameBoard {
  @Prop({ required: true })
  matchId: string;

  @Prop({ required: true })
  boardState: string;

  @Prop({ required: true })
  email: string;
}

export const GameBoardSchema = SchemaFactory.createForClass(GameBoard);