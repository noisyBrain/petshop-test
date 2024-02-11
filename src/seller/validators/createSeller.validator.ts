import { IsEmail, IsEnum, IsString, IsStrongPassword } from 'class-validator';

import { Role } from '../../types';

export class CreateSeller {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  mail: string;

  @IsStrongPassword()
  password: string;

  @IsEnum(Role)
  role: Role
}
