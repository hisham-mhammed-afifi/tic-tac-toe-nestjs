import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateMatchDto } from './Dtos/create-match.dto';
import { JoinMatchDto } from './Dtos/join-match.dto';
import { MatchService } from './match.service';

@ApiTags('Match')
@Controller('match')
export class MatchController {
  constructor(private matchSrv: MatchService) {}

  @Post('/create')
  @ApiOperation({ summary: 'create new match with first player id.' })
  createMatch(@Body() body: CreateMatchDto) {
    return this.matchSrv.create(body);
  }

  @Post('/join')
  @ApiOperation({ summary: 'join exist match with second player id.' })
  joinMatch(@Body() body: JoinMatchDto) {
    const { id, secondPlayerId } = body;
    return this.matchSrv.update(id, secondPlayerId);
  }
}
