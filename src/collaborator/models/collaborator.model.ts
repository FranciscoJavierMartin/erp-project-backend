import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  collection: 'Collaborator',
})
export class Collaborator {
  @Prop({
    type: String,
    required: true,
  })
  firstName: string;

  @Prop({
    type: String,
    required: true,
  })
  lastName: string;

  @Prop({
    type: String,
    required: true,
  })
  email: string;

  @Prop({
    type: String,
  })
  phone?: string;

  @Prop({
    type: String,
    required: true,
  })
  role: string;

  @Prop({
    type: String,
    required: true,
  })
  gender: string;

  @Prop({
    type: String,
    required: true,
  })
  n_doc: string;

  @Prop({
    type: String,
    required: true,
  })
  password: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  state: boolean;

  @Prop({
    type: String,
    required: false,
  })
  country?: string;
}

export type CollaboratorDocument = HydratedDocument<Collaborator>;

export const CollaboratorSchema = SchemaFactory.createForClass(Collaborator);
