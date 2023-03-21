import { Module } from '@nestjs/common';
import { GameBoardController } from './game-board.controller';
import { GameBoardService } from './game-board.service';
import { DatabaseModule } from '../database/database.module';
import { gameboardProviders } from '../providers/game-board.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [GameBoardController],
  providers: [GameBoardService, ...gameboardProviders],
})
export class GameBoardModule {}
