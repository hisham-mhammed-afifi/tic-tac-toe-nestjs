import * as mongoose from 'mongoose';

export const GameBoardSchema = new mongoose.Schema({
  matchId: { type: String, required: true },
  boardState: { type: String, required: true },
});
