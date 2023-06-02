import { Injectable } from '@nestjs/common';
import { CreateTalentInterestDto } from './dto/create-talent-interest.dto';
import { UpdateTalentInterestDto } from './dto/update-talent-interest.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TalentInterestsService {
  constructor(private prisma: PrismaService) {}
  create(createTalentInterestDto: CreateTalentInterestDto) {
    return 'This action adds a new talentInterest';
  }

  async findAll() {
    return await this.prisma.talentInterest.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} talentInterest`;
  }

  update(id: number, updateTalentInterestDto: UpdateTalentInterestDto) {
    return `This action updates a #${id} talentInterest`;
  }

  remove(id: number) {
    return `This action removes a #${id} talentInterest`;
  }
}
