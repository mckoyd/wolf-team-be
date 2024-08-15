import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SuccessCardsService } from './success_cards.service';
import { CreateSuccessCardDto } from './dto/create-success_card.dto';

@Controller('success-cards')
export class SuccessCardsController {
  constructor(private readonly successCardsService: SuccessCardsService) {}

  @Post()
  create(@Body() createSuccessCardDto: CreateSuccessCardDto) {
    return this.successCardsService.create(createSuccessCardDto);
  }

  @Get()
  findAll() {
    return this.successCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.successCardsService.findOne(+id);
  }
}
