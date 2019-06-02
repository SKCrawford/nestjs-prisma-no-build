import { Test, TestingModule } from '@nestjs/testing';

import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let service: PrismaService;

  it('should be defined', async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
    expect(service).toBeDefined();
  });

  it('is defined if PrismaService is mocked', async () => {
    const mockPrismaService = {
      posts: async () => [{ title: 'PrismaService test post #1' }],
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    service = module.get<PrismaService>(PrismaService);
    expect(service).toBeDefined();
  });
});
