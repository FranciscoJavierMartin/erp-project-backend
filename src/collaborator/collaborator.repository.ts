import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Collaborator,
  CollaboratorDocument,
} from './models/collaborator.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { RegisterCollaboratorDto } from './dto/register-collaborator.dto';

@Injectable()
export class CollaboratorRepository {
  constructor(
    @InjectModel(Collaborator.name)
    private collaboratorModel: Model<CollaboratorDocument>,
  ) {}

  async register(collaborator: RegisterCollaboratorDto) {
    collaborator.password = bcrypt.hashSync('123456789');
    const collaboratorCreated = new this.collaboratorModel({ ...collaborator });
    return await collaboratorCreated.save();
  }
}
