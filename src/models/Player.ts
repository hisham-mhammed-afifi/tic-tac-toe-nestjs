import { Document } from 'mongoose';

export interface Player extends Document {
  name: string;
  email: string;
  password: string;
}
