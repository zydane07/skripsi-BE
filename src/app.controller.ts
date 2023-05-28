import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller('')
// @Controller('zydane')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  async findBestWorkCode(
    userTalentCodes: string[],
    userInterestCodes: string[],
  ) {
    const rules = await this.prisma.rule.findMany({
      include: {
        Talent: true,
        Interest: true,
        Work: true,
      },
    });

    const scoreMap = new Map<string, number>();

    for (const rule of rules) {
      const talentCodeSet = new Set(rule.talentCode);
      const interestCodeSet = new Set(rule.interestCode);

      let score = 0;

      for (let i = 0; i < rule.talentCode.length; i++) {
        const talent = rule.talentCode[i];
        if (talentCodeSet.has(talent)) {
          score++;
        }
      }

      for (let i = 0; i < rule.interestCode.length; i++) {
        const interest = rule.interestCode[i];
        if (interestCodeSet.has(interest)) {
          score++;
        }
      }
      console.log(rule.interestCode.length);

      const workCode = rule.workCode;

      if (!scoreMap.has(workCode)) {
        scoreMap.set(workCode, score);
      } else {
        const existingScore = scoreMap.get(workCode);
        if (existingScore && score > existingScore) {
          scoreMap.set(workCode, score);
        }
      }
      // console.log(workCode);
      // console.log(score);
    }

    let bestWorkCode: string | undefined;
    let maxScore = -1; // Initialize maxScore with -1

    for (const [workCode, score] of scoreMap) {
      if (score > maxScore) {
        maxScore = score;
        bestWorkCode = workCode;
      }
    }
    console.log(scoreMap);

    console.log('Best Work Code:', bestWorkCode);
  }
  @Get()
  async getHello() {
    const userInterestCodes = ['B01', 'B02', 'B07']; // Replace with user's selected talentCodes
    const userTalentCodes = ['M02', 'M07']; // Replace with user's selected interestCodes

    // this.findBestWorkCode(userTalentCodes, userInterestCodes);

    return await this.prisma.rule.findMany({
      where: { interestCode: 'M02', talentCode: { in: ['B01', 'B02', 'B07'] } },
      // take: 1,
    });

    // const works = await this.prisma.rule.findMany({
    //   where: {
    //     OR: userInterestCodes.map((interestCode) => ({
    //       interestCode,
    //       talentCode: { in: userTalentCodes },
    //     })),
    //   },
    //   select: {
    //     workCode: true,
    //   },
    // });

    // if (works.length > 0) {
    //   const workCodes = works.map((work) => work.workCode);
    //   console.log(workCodes); // The appropriate workCodes
    // } else {
    //   console.log('No matching workCodes found.');
    // }

    // return this.appService.getHello();
  }
}
