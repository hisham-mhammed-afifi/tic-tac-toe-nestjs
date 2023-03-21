import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { GameBoard } from '../models/GameBoard';

@Injectable()
export class GameBoardService {
  constructor(
    @Inject('GAMEBOARD_MODEL')
    private gameBoardModel: Model<GameBoard>,
  ) {}

  async findAll(): Promise<GameBoard[]> {
    return this.gameBoardModel.find().exec();
  }
}
