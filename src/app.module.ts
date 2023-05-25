import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterestsModule } from './interests/interests.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [InterestsModule],
})
export class AppModule {}
