import { Injectable } from '@nestjs/common';
import { CreateDirectorCardDto } from './dto/create-director_card.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DirectorCard } from '../schemas/Director_Card.schema';
import { Model } from 'mongoose';

@Injectable()
export class DirectorCardsService {
  constructor(
    @InjectModel(DirectorCard.name) private readonly model: Model<DirectorCard>,
  ) {}

  async create(createDirectorCardDto: CreateDirectorCardDto) {
    return await new this.model({
      ...createDirectorCardDto,
    }).save();
  }

  async findAll() {
    return await this.model.find().exec();
  }

  async findOne(id: number) {
    return await this.model.findById(id).exec();
  }
}
