import { IsEnum, Matches } from 'class-validator';

export class CreateRuleDto {
  @Matches(/R\d{2}/)
  code: string;

  @Matches(/^(B|M)\d{2}$/)
  talentInterestCode: string;

  @Matches(/P\d{2}/)
  workCode: string;
}
