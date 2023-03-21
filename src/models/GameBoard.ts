import { Document } from 'mongoose';

export interface GameBoard extends Document {
  matchId: string;
  boardState: boolean[][];
}
