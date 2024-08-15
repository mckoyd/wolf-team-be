import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class SuccessCard {
  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  jobTitle: string;

  @Prop({ required: true })
  fullName: string;
}

export const SuccessCardSchema = SchemaFactory.createForClass(SuccessCard);
