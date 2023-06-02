import { Module } from '@nestjs/common';
import { TalentInterestsService } from './talent-interests.service';
import { TalentInterestsController } from './talent-interests.controller';

@Module({
  controllers: [TalentInterestsController],
  providers: [TalentInterestsService]
})
export class TalentInterestsModule {}
