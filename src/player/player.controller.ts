import { Controller, Post, Body, Session, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Serialize } from '../interceptors/serialize.interceptor';
import { Me } from './decorators/me.decorator';
import { CreatePlayerDto } from './Dtos/create-player.dto';
import { PlayerDto } from './Dtos/player.dto';
import { UpdatePlayerDto } from './Dtos/update-player.dto';
import { PlayerService } from './player.service';

@ApiTags('Player')
@Controller('player')
@Serialize(PlayerDto)
export class PlayerController {
  constructor(private playerSrv: PlayerService) {}

  @Post('/signup')
  @ApiOperation({ summary: 'signup new player.' })
  signup(@Body() body: CreatePlayerDto, @Session() session: any) {
    const { name, email, password } = body;
    return this.playerSrv.signup(name, email, password);
  }

  @Post('/login')
  @ApiOperation({ summary: 'login new player.' })
  async login(@Body() body: CreatePlayerDto, @Session() session: any) {
    const player = await this.playerSrv.login(body.email, body.password);
    session.playerId = player._id;
    return player;
  }

  @Get('/me')
  @ApiOperation({ summary: 'get player profile.' })
  getMe(@Me() player: PlayerDto) {
    return player;
  }
}
