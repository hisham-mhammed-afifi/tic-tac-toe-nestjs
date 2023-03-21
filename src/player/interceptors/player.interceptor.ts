import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { PlayerService } from '../player.service';

@Injectable()
export class PlayerInterceptor implements NestInterceptor {
  constructor(private playerSrv: PlayerService) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const req = context.switchToHttp().getRequest();
    const { playerId } = req.session;

    if (playerId) {
      const player = await this.playerSrv.findById(playerId);
      req.player = player;
    }
    return next.handle();
  }
}
