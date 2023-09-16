import { Module } from '@nestjs/common';
import { CollaboratorModule } from './collaborator/collaborator.module';

@Module({
  imports: [CollaboratorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
