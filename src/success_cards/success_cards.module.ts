import { Module } from '@nestjs/common';
import { SuccessCardsService } from './success_cards.service';
import { SuccessCardsController } from './success_cards.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SuccessCard, SuccessCardSchema } from '../schemas/Success_Card.schema';

@Module({
  controllers: [SuccessCardsController],
  providers: [SuccessCardsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: SuccessCard.name,
        schema: SuccessCardSchema,
      },
    ]),
  ],
})
export class SuccessCardsModule {}
