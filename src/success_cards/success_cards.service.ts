import { Injectable } from '@nestjs/common';
import { CreateSuccessCardDto } from './dto/create-success_card.dto';
import { UpdateSuccessCardDto } from './dto/update-success_card.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SuccessCard } from '../schemas/Success_Card.schema';
import { Model } from 'mongoose';

@Injectable()
export class SuccessCardsService {
  constructor(
    @InjectModel(SuccessCard.name) private readonly model: Model<SuccessCard>,
  ) {}

  async create(createSuccessCardDto: CreateSuccessCardDto) {
    return await new this.model({
      ...createSuccessCardDto,
    }).save();
  }

  async findAll() {
    return await this.model.find().exec();
  }

  async findOne(id: number) {
    return await this.model.findById(id);
  }
}
