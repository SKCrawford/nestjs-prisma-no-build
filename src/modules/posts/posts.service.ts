import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  public async getPosts() {
    return await this.prisma.posts();
  }
}
