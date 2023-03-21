import { Connection } from 'mongoose';
import { GameBoardSchema } from '../game-board/game-board.schema';

export const gameboardProviders = [
  {
    provide: 'GAMEBOARD_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('GameBoard', GameBoardSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
