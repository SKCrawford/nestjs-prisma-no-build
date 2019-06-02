import { Controller, Get } from '@nestjs/common';

import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly service: PostsService) {}

  @Get('/')
  public async getPosts() {
    return await this.service.getPosts();
  }
}
