import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/service/app.service';

@Controller('states')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<{ id: number, name: string }[]> {
    return this.appService.findAll().toPromise();
  }
}
