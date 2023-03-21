import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { PlayerInterceptor } from './interceptors/player.interceptor';
import { playerProviders } from '../database/player.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PlayerController],
  providers: [
    PlayerService,
    ...playerProviders,
    {
      provide: APP_INTERCEPTOR,
      useClass: PlayerInterceptor,
    },
  ],
})
export class PlayerModule {}
