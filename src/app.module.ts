import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DirectorCardsModule } from './director_cards/director_cards.module';

import 'dotenv/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SuccessCardsModule } from './success_cards/success_cards.module';

const MONGO_URI = process.env.MONGO_URI || '';

@Module({
  imports: [MongooseModule.forRoot(MONGO_URI), DirectorCardsModule, SuccessCardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
