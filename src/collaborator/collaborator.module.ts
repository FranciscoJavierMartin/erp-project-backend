import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorController } from './collaborator.controller';
import { CollaboratorRepository } from './collaborator.repository';
import {
  CollaboratorModel,
  CollaboratorSchema,
} from './models/collaborator.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CollaboratorModel.name, schema: CollaboratorSchema },
    ]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_TOKEN'),
          signOptions: { expiresIn: configService.get('JWT_EXPIRES_IN') },
        };
      },
    }),
  ],
  controllers: [CollaboratorController],
  providers: [CollaboratorService, CollaboratorRepository],
})
export class CollaboratorModule {}
