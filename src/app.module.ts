import { Module } from '@nestjs/common';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/erp'),
    CollaboratorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
