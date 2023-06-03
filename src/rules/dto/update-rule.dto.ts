import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateRuleDto } from './create-rule.dto';
import { Matches } from 'class-validator';

export class UpdateRuleDto extends PartialType(CreateRuleDto) {
  @Matches(/R\d{2}/)
  code: string;

  @Matches(/^(B|M)\d{2}$/)
  talentInterestCode: string;

  @Matches(/P\d{2}/)
  workCode: string;
}
