import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // await prisma.user.deleteMany();
  // await prisma.interests.create({
  //   data: {
  //     code: 'M01',
  //     description: 'dadada',
  //     name: 'Outdoor',
  //     example: ['makan', 'minum', 'tidur'],
  //   },
  // });
  // await prisma.interests.createMany({
  //   data: [
  //     {
  //       code: 'M01',
  //       description: 'dadada',
  //       name: 'outdoor',
  //       example: ['makan', 'minum', 'wisuda'],
  //     },
  //     {
  //       code: 'M02',
  //       description: 'sasasasa',
  //       name: 'mechanical',
  //       example: ['makan', 'minum', 'wisuda'],
  //     },
  //   ],
  // });
  // const user = await prisma.user.create({
  //   data: { name: 'zydane' },
  // });

  // await prisma.user.createMany({
  //   data: [
  //     {
  //       name: 'farhan',
  //     },
  //     {
  //       name: 'zydane',
  //     },
  //   ],
  // });

  // const user = await prisma.user.findUnique({
  //   where: { id: 4 },
  // });

  const [user_1, user_2, ...x] = await prisma.user.findMany();

  // await prisma.post.create({
  //   data: {
  //     authorId: user.id,
  //     title: 'the way of coding',
  //   },
  // });

  // await prisma.post.createMany({
  //   data: [
  //     {
  //       authorId: user_1.id,
  //       title: 'the way of coding',
  //     },
  //     {
  //       authorId: user_2.id,
  //       title: 'true way of brother',
  //     },
  //     {
  //       authorId: user_2.id,
  //       title: 'sebening gula pasir',
  //     },
  //   ],
  // });

  // const userWithPost = await prisma.user.findUnique({
  //   where: { id: user_2.id },
  //   include: { posts: true },
  // });

  // console.log(userWithPost);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
