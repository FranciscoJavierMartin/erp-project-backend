import { Module } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorController } from './collaborator.controller';
import { CollaboratorRepository } from './collaborator.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Collaborator, CollaboratorSchema } from './models/collaborator.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Collaborator.name, schema: CollaboratorSchema },
    ]),
  ],
  controllers: [CollaboratorController],
  providers: [CollaboratorService, CollaboratorRepository],
})
export class CollaboratorModule {}
