import { Module, MiddlewareConsumer, ValidationPipe } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { MatchModule } from './match/match.module';
import { GameBoardModule } from './game-board/game-board.module';
import { APP_PIPE } from '@nestjs/core';
import { DatabaseModule } from './database/database.module';

const cookieSession = require('cookie-session');

@Module({
  imports: [
    PlayerModule,
    MatchModule,
    GameBoardModule,
    DatabaseModule,
    HttpModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cookieSession({
          keys: ['abc'],
        }),
      )
      .forRoutes('*');
  }
}
