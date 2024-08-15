import { Test, TestingModule } from '@nestjs/testing';
import { DirectorCardsController } from './director_cards.controller';
import { DirectorCardsService } from './director_cards.service';

describe('DirectorCardsController', () => {
  let controller: DirectorCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectorCardsController],
      providers: [DirectorCardsService],
    }).compile();

    controller = module.get<DirectorCardsController>(DirectorCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
