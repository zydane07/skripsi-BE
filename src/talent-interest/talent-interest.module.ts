import { Module } from '@nestjs/common';
import { TalentInterestService } from './talent-interest.service';
import { TalentInterestController } from './talent-interest.controller';

@Module({
  controllers: [TalentInterestController],
  providers: [TalentInterestService]
})
export class TalentInterestModule {}
