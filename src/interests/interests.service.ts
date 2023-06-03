import { Injectable } from '@nestjs/common';
import { CreateInterestDto } from './dto/create-interest.dto';
import { UpdateInterestDto } from './dto/update-interest.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InterestsService {
  constructor(private prisma: PrismaService) {}

  create(createInterestDto: CreateInterestDto) {
    return 'This action adds a new interest';
  }

  async findAll() {
    return await this.prisma.talentInterest.findMany({
      where: { code: { startsWith: 'M' } },
    });
  }
  findOne(id: number) {
    return `This action returns a #${id} interest`;
  }

  update(id: number, updateInterestDto: UpdateInterestDto) {
    return `This action updates a #${id} interest`;
  }

  remove(id: number) {
    return `This action removes a #${id} interest`;
  }
}
