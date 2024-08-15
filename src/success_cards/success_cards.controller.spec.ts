import { Test, TestingModule } from '@nestjs/testing';
import { SuccessCardsController } from './success_cards.controller';
import { SuccessCardsService } from './success_cards.service';

describe('SuccessCardsController', () => {
  let controller: SuccessCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuccessCardsController],
      providers: [SuccessCardsService],
    }).compile();

    controller = module.get<SuccessCardsController>(SuccessCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
