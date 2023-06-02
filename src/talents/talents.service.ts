import { Injectable } from '@nestjs/common';
import { CreateTalentDto } from './dto/create-talent.dto';
import { UpdateTalentDto } from './dto/update-talent.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TalentsService {
  constructor(private prisma: PrismaService) {}
  create(createTalentDto: CreateTalentDto) {
    return 'This action adds a new talent';
  }

  async findAll() {
    return await this.prisma.talentInterest.findMany({
      where: { code: { startsWith: 'B' } },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} talent`;
  }

  update(id: number, updateTalentDto: UpdateTalentDto) {
    return `This action updates a #${id} talent`;
  }

  remove(id: number) {
    return `This action removes a #${id} talent`;
  }
}
