import { Controller, Get } from '@nestjs/common';
import { State } from 'src/model/state.entity';
import { AppService } from 'src/service/app.service';

@Controller('states')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<State[]> {
    return this.appService.findAll().toPromise();
  }
}
