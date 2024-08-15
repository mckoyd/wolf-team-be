import { PartialType } from '@nestjs/mapped-types';
import { CreateDirectorCardDto } from './create-director_card.dto';

export class UpdateDirectorCardDto extends PartialType(CreateDirectorCardDto) {}
