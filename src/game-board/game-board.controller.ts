import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Game Board')
@Controller('game-board')
export class GameBoardController {}
