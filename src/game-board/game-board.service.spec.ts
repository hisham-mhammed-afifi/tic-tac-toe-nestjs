import { Test, TestingModule } from '@nestjs/testing';
import { GameBoardService } from './game-board.service';

describe('GameBoardService', () => {
  let service: GameBoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameBoardService],
    }).compile();

    service = module.get<GameBoardService>(GameBoardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
