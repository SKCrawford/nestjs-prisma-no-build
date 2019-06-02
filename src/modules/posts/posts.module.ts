import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  imports: [PrismaModule],
  providers: [PostsService],
})
export class PostsModule {}
