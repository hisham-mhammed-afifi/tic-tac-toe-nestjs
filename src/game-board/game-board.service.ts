import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GameBoard, GameBoardDocument } from './game-board.schema';

@Injectable()
export class GameBoardService {
  constructor(
    @InjectModel(GameBoard.name)
    private gameBoardModel: Model<GameBoardDocument>,
  ) {}

  async findAll(): Promise<GameBoard[]> {
    return this.gameBoardModel.find().exec();
  }
}
