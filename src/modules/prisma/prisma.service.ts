import { Injectable } from '@nestjs/common';

import { Prisma } from './prisma.generated';

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      debug: true,
      endpoint: 'http://localhost:4466/',
    });
  }
}
