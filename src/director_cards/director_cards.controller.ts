import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DirectorCardsService } from './director_cards.service';
import { CreateDirectorCardDto } from './dto/create-director_card.dto';

@Controller('director-cards')
export class DirectorCardsController {
  constructor(private readonly directorCardsService: DirectorCardsService) {}

  @Post()
  create(@Body() createDirectorCardDto: CreateDirectorCardDto) {
    return this.directorCardsService.create(createDirectorCardDto);
  }

  @Get()
  findAll() {
    return this.directorCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directorCardsService.findOne(+id);
  }
}
