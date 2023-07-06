import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TalentInterestService } from './talent-interest.service';
import { CreateTalentInterestDto } from './dto/create-talent-interest.dto';
import { UpdateTalentInterestDto } from './dto/update-talent-interest.dto';

@Controller('talent-interest')
export class TalentInterestController {
  constructor(private readonly talentInterestService: TalentInterestService) {}

  @Post()
  create(@Body() createTalentInterestDto: CreateTalentInterestDto) {
    return this.talentInterestService.create(createTalentInterestDto);
  }

  @Get()
  findAll() {
    return this.talentInterestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.talentInterestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTalentInterestDto: UpdateTalentInterestDto) {
    return this.talentInterestService.update(+id, updateTalentInterestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talentInterestService.remove(+id);
  }
}
