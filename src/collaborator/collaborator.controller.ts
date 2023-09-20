import { Controller, Post, Body } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { RegisterCollaboratorDto } from './dto/register-collaborator.dto';
import { LoginCollaboratorDto } from './dto/login-collaborator.dto';

@Controller('collaborator')
export class CollaboratorController {
  constructor(private readonly collaboratorService: CollaboratorService) {}

  @Post('register')
  register(@Body() registerCollaboratorDto: RegisterCollaboratorDto) {
    return this.collaboratorService.create(registerCollaboratorDto);
  }

  @Post('login')
  login(@Body() loginCollaboratorDto: LoginCollaboratorDto) {
    return this.collaboratorService.login(loginCollaboratorDto);
  }
}
