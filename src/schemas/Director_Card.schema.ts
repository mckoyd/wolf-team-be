import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class DirectorCard {
  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  jobTitle: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  fullName: string;
}

export const DirectorCardSchema = SchemaFactory.createForClass(DirectorCard);
