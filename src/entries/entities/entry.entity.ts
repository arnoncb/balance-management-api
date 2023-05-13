import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EntryDocument = HydratedDocument<Entry>;

@Schema()
export class Entry {
  @Prop()
  amount: number;

  @Prop()
  description: string;

  @Prop()
  date: string;

  @Prop()
  type: string;

  @Prop()
  userId: string;
}

export const EntrySchema = SchemaFactory.createForClass(Entry);
