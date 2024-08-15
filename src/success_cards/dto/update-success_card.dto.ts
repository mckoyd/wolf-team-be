import { PartialType } from '@nestjs/mapped-types';
import { CreateSuccessCardDto } from './create-success_card.dto';

export class UpdateSuccessCardDto extends PartialType(CreateSuccessCardDto) {}
