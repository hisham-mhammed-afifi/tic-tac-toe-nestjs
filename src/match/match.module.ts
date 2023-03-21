import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { matchProviders } from '../database/match.providers';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MatchController],
  providers: [MatchService, ...matchProviders],
})
export class MatchModule {}
