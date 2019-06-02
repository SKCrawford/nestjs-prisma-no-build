import { Module } from '@nestjs/common';

import { PostsModule } from './posts';

@Module({
  imports: [PostsModule],
})
export class BundledModule {}
