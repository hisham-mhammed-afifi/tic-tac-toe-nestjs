import { Connection } from 'mongoose';
import { MatchSchema } from '../match/match.schema';

export const matchProviders = [
  {
    provide: 'MATCH_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Match', MatchSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
