import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  emailAddress: string;

  @MinLength(8)
  @IsNotEmpty()
  password: string;

  lastLogin: string;
}
