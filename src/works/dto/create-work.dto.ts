import { IsOptional, IsString, Matches, MinLength } from 'class-validator';

export class CreateWorkDto {
  @Matches(/^P\d{2}$/)
  code: string;

  @MinLength(5)
  @IsString()
  name: string;

  @IsOptional()
  suggestion: string;
  @IsOptional()
  competence: string[];
}
