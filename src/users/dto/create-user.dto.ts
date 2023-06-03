import { Gender, Job } from '@prisma/client';
import { IsAlpha, IsEmail, IsEnum, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsAlpha()
  name: string;

  @MinLength(5)
  password: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsEnum(Job)
  job: Job;
}
