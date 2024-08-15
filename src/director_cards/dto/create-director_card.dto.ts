import { isNotEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateDirectorCardDto {
  @IsNotEmpty()
  @IsString()
  imageUrl: string;

  @IsNotEmpty()
  @IsString()
  jobTitle: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;
}
