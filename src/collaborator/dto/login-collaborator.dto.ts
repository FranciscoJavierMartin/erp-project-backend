import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginCollaboratorDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
