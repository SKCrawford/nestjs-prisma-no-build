import { Module } from '@nestjs/common';

import { BundledModule } from '../modules';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  imports: [BundledModule],
  providers: [AppService],
})
export class AppModule {}
