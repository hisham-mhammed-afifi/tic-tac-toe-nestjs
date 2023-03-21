import * as mongoose from 'mongoose';

export const MatchSchema = new mongoose.Schema({
  firstPlayerId: { type: String, required: true },
  secondPlayerId: { type: String, required: false },
  currentPlayerId: { type: String, required: false },
});
