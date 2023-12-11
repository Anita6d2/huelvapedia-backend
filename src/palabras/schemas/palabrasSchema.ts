import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Status {
  PUBLISHED = 'PUBLISHED',
  NOT_PUBLISHED = 'NOT_PUBLISHED',
}

@Schema()
export class Palabras {
  @Prop({ required: true, unique: true })
  title: string;
  @Prop({ required: true })
  definition: string;
  @Prop({ default: Status.NOT_PUBLISHED })
  status: Status;
}

export const PalabrasSchema = SchemaFactory.createForClass(Palabras);
