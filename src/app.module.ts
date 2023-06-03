import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { WorksModule } from './works/works.module';
import { RulesModule } from './rules/rules.module';
import { TalentsModule } from './talents/talents.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { InterestsModule } from './interests/interests.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    PrismaModule,
    WorksModule,
    RulesModule,
    TalentsModule,
    AuthModule,
    UsersModule,
    InterestsModule,
  ],
})
export class AppModule {}
