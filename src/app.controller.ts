import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
// @Controller('zydane')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  //   // return "Hai zydane";
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
