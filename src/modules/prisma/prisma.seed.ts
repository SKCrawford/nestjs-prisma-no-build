import { prisma } from './prisma.generated';

async function main() {
  await Promise.all([
    prisma.createPost({
      title: 'Test Post #1',
    }),
    prisma.createPost({
      title: 'Test Post #2',
    }),
    prisma.createPost({
      title: 'Test Post #3',
    }),
  ]);
}

/* tslint:disable:no-console */
main().catch(e => console.error(e));
