import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameBoardController } from './game-board.controller';
import { GameBoardService } from './game-board.service';
import { GameBoard, GameBoardSchema } from './game-board.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: GameBoard.name, schema: GameBoardSchema }])],
  controllers: [GameBoardController],
  providers: [GameBoardService]
})
export class GameBoardModule {}
