import { Test, TestingModule } from '@nestjs/testing';

import { PrismaModule, PrismaService } from '../prisma';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const mockService = {
      posts: async () => [{ title: 'PostsService test post #1' }],
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [PostsService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockService)
      .compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
