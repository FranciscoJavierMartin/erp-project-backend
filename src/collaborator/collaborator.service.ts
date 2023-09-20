import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterCollaboratorDto } from './dto/register-collaborator.dto';
import { CollaboratorRepository } from './collaborator.repository';
import { LoginCollaboratorDto } from './dto/login-collaborator.dto';

@Injectable()
export class CollaboratorService {
  constructor(
    private jwtService: JwtService,
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

    const access_token = await this.jwtService.signAsync({
      sub: collaborator._id,
      firstName: collaborator.firstName,
      lastName: collaborator.lastName,
      email: collaborator.email,
      role: collaborator.role,
    });

    return {
      collaborator,
      access_token,
    };
  }
}
