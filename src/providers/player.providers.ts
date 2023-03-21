import { Connection } from 'mongoose';
import { PlayerSchema } from '../player/player.schema';

export const playerProviders = [
  {
    provide: 'PLAYER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Player', PlayerSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
