import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterCollaboratorDto } from './dto/register-collaborator.dto';
import { CollaboratorRepository } from './collaborator.repository';
import { LoginCollaboratorDto } from './dto/login-collaborator.dto';

@Injectable()
export class CollaboratorService {
  constructor(
    private readonly collaboratorRepository: CollaboratorRepository,
  ) {}

  async create(registerCollaboratorDto: RegisterCollaboratorDto) {
    return this.collaboratorRepository.register(registerCollaboratorDto);
  }

  async login(loginCollaboratorDto: LoginCollaboratorDto) {
    const collaborator =
      await this.collaboratorRepository.getCollaboratorByEmail(
        loginCollaboratorDto.email,
      );

    if (
      !collaborator ||
      !collaborator.comparePassword(loginCollaboratorDto.password)
    ) {
      throw new BadRequestException('Invalid credentials');
    }

    return collaborator;
  }
}
