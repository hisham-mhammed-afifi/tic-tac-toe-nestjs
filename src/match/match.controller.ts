import { Body, Controller, Post } from '@nestjs/common';
import { CreateMatchDto } from './Dtos/create-match.dto';
import { JoinMatchDto } from './Dtos/join-match.dto';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
  constructor(private matchSrv: MatchService) {}

  @Post('/create')
  createMatch(@Body() body: CreateMatchDto) {
    return this.matchSrv.create(body);
  }

  @Post('/join')
  joinMatch(@Body() body: JoinMatchDto) {
    const { id, secondPlayerId } = body;
    return this.matchSrv.update(id, secondPlayerId);
  }
}
