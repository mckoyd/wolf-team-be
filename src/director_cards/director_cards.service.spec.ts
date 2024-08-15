import { Test, TestingModule } from '@nestjs/testing';
import { DirectorCardsService } from './director_cards.service';

describe('DirectorCardsService', () => {
  let service: DirectorCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectorCardsService],
    }).compile();

    service = module.get<DirectorCardsService>(DirectorCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
