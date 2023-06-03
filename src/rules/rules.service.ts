import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Prisma } from '@prisma/client';
import { error } from 'console';

@Injectable()
export class RulesService {
  constructor(private prisma: PrismaService) {}

  async create(createRuleDto: CreateRuleDto) {
    try {
      const { code, talentInterestCode, workCode } = createRuleDto;

      // cek works masih ada/ga
      const works = await this.prisma.work.findUnique({
        where: { code: workCode },
      });

      if (!works) return new NotFoundException();

      const rules = await this.prisma.rule.create({
        data: {
          code,
          talentInterestCode,
          workCode,
        },
      });

      return rules;
    } catch (error) {
      if (!(error instanceof Prisma.PrismaClientKnownRequestError)) return;
      // console.log(error.code);
    }
  }

  async findAll(code: string) {
    return await this.prisma.rule.findMany({
      where: { code },
    });
  }

  findOne(id: string) {
    return `This action returns a #${id} rule`;
  }

  async update(id: string, updateRuleDto: UpdateRuleDto) {
    try {
      return await this.prisma.rule.update({
        where: { id: id },
        data: {
          code: updateRuleDto.code,
          talentInterestCode: updateRuleDto.talentInterestCode,
          workCode: updateRuleDto.workCode,
        },
      });
    } catch (error) {
      if (!(error instanceof Prisma.PrismaClientKnownRequestError)) return;
      if (error.code === 'P2025') throw new NotFoundException();

      return 'err update';
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.rule.delete({
        where: { id: id },
      });
    } catch (error) {
      if (!(error instanceof Prisma.PrismaClientKnownRequestError)) return;
      if (error.code === 'P2025') throw new NotFoundException();

      return 'err delete';
    }
  }
}
