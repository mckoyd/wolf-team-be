import { Module } from '@nestjs/common';
import { DirectorCardsService } from './director_cards.service';
import { DirectorCardsController } from './director_cards.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DirectorCard,
  DirectorCardSchema,
} from '../schemas/Director_Card.schema';

@Module({
  controllers: [DirectorCardsController],
  providers: [DirectorCardsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: DirectorCard.name,
        schema: DirectorCardSchema,
      },
    ]),
  ],
})
export class DirectorCardsModule {}
