import { Test, TestingModule } from '@nestjs/testing';
import { GameBoardController } from './game-board.controller';

describe('GameBoardController', () => {
  let controller: GameBoardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameBoardController],
    }).compile();

    controller = module.get<GameBoardController>(GameBoardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
