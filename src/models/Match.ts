import { Document } from 'mongoose';

export interface Match extends Document {
  firstPlayerId: string;
  secondPlayerId: string;
  currentPlayerId: string;
}
