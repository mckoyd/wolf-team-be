import { Test, TestingModule } from '@nestjs/testing';
import { SuccessCardsService } from './success_cards.service';

describe('SuccessCardsService', () => {
  let service: SuccessCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuccessCardsService],
    }).compile();

    service = module.get<SuccessCardsService>(SuccessCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
