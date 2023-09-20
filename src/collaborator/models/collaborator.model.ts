import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  CallbackWithoutResultAndOptionalError,
  HydratedDocument,
} from 'mongoose';
import * as bcrypt from 'bcryptjs';

@Schema({
  collection: 'Collaborator',
  toJSON: {
    transform(_doc, ret) {
      delete ret.password;
      return ret;
    },
  },
})
export class CollaboratorModel {
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
    unique: true,
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
    required: false,
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

export type CollaboratorDocument = HydratedDocument<CollaboratorModel>;

export const CollaboratorSchema =
  SchemaFactory.createForClass(CollaboratorModel);

CollaboratorSchema.pre(
  'save',
  function (this: Collaborator, next: CallbackWithoutResultAndOptionalError) {
    const hashedPassword: string = bcrypt.hashSync(this.password);
    this.password = hashedPassword;
    this.email = this.email.toLowerCase();
    next();
  },
);

CollaboratorSchema.methods.comparePassword = function (
  password: string,
): boolean {
  return bcrypt.compareSync(password, this.password);
};

export type Collaborator = CollaboratorModel &
  CollaboratorDocument & {
    comparePassword: (password: string) => boolean;
  };
