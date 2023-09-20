import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Collaborator,
  CollaboratorModel,
  CollaboratorDocument,
} from './models/collaborator.model';
import { Model } from 'mongoose';

import { RegisterCollaboratorDto } from './dto/register-collaborator.dto';

@Injectable()
export class CollaboratorRepository {
  constructor(
    @InjectModel(CollaboratorModel.name)
    private collaboratorModel: Model<CollaboratorDocument>,
  ) {}

  async register(collaborator: RegisterCollaboratorDto) {
    const collaboratorCreated = new this.collaboratorModel({ ...collaborator });
    return await collaboratorCreated.save();
  }

  async getCollaboratorByEmail(email: string): Promise<Collaborator> {
    return await this.collaboratorModel.findOne({ email });
  }
}
