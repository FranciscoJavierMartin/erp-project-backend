import { Injectable } from '@nestjs/common';
import { RegisterCollaboratorDto } from './dto/register-collaborator.dto';
import { CollaboratorRepository } from './collaborator.repository';

@Injectable()
export class CollaboratorService {
  constructor(
    private readonly collaboratorRepository: CollaboratorRepository,
  ) {}

  async create(registerCollaboratorDto: RegisterCollaboratorDto) {
    return this.collaboratorRepository.register(registerCollaboratorDto);
  }
}
