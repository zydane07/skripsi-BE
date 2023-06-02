import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { WorksModule } from './works/works.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, WorksModule],
})
export class AppModule {}
