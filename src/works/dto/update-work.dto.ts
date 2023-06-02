import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateWorkDto } from './create-work.dto';

export class UpdateWorkDto extends OmitType(CreateWorkDto, ['code'] as const) {}
