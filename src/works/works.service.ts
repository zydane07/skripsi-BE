import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Prisma } from '@prisma/client';

@Injectable()
export class WorksService {
  constructor(private prisma: PrismaService) {}
  async create(createWorkDto: CreateWorkDto) {
    console.log('aaaaaaddd');
    console.log(createWorkDto);

    try {
      const { code, name, suggestion, competence } = createWorkDto;

      const works = await this.prisma.work.create({
        data: {
          code,
          name,
          suggestion,
          competence,
        },
      });

      return works;
    } catch (error) {
      if (!(error instanceof Prisma.PrismaClientKnownRequestError)) return;
      // console.log(error.code);
      if (error.code === 'P2002') throw new ConflictException();
      return 'error';
    }
  }

  async findAll() {
    return await this.prisma.work.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} work`;
  }

  async update(id: string, updateWorkDto: UpdateWorkDto) {
    try {
      return await this.prisma.work.update({
        where: { code: id },
        data: {
          name: updateWorkDto.name,
          suggestion: updateWorkDto.suggestion,
          competence: updateWorkDto.competence,
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
      return await this.prisma.work.delete({
        where: { code: id },
      });
    } catch (error) {
      if (!(error instanceof Prisma.PrismaClientKnownRequestError)) return;
      if (error.code === 'P2025') throw new NotFoundException();

      return 'err delete';
    }
  }
}
