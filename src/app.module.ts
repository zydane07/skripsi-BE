import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { WorksModule } from './works/works.module';
import { TalentInterestsModule } from './talent-interests/talent-interests.module';
import { RulesModule } from './rules/rules.module';
import { TalentsModule } from './talents/talents.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, WorksModule, TalentInterestsModule, RulesModule, TalentsModule, AuthModule, UsersModule],
})
export class AppModule {}
