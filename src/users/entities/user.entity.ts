import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Entry } from 'src/entries/entities/entry.entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string[];

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  entries: Entry[];
}

export const UserSchema = SchemaFactory.createForClass(User);
