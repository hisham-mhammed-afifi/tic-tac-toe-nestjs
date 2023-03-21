import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerController } from './player.controller';
import { Player, PlayerSchema } from './player.schema';
import { PlayerService } from './player.service';
import { PlayerInterceptor } from './interceptors/player.interceptor';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
  ],
  controllers: [PlayerController],
  providers: [
    PlayerService,
    {
      provide: APP_INTERCEPTOR,
      useClass: PlayerInterceptor,
    },
  ],
})
export class PlayerModule {}
