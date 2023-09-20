import { Module } from '@nestjs/common';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TODO: Move to env
    MongooseModule.forRoot('mongodb://localhost:27017/erp'),
    CollaboratorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
