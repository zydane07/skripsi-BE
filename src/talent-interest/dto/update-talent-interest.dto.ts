import { PartialType } from '@nestjs/mapped-types';
import { CreateTalentInterestDto } from './create-talent-interest.dto';

export class UpdateTalentInterestDto extends PartialType(CreateTalentInterestDto) {}
