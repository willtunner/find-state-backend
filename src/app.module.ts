import { Module } from '@nestjs/common';
import { AppService } from './service/app.service';
import { AppController } from './controller/app.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
