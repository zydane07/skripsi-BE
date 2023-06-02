import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TalentInterestsService } from './talent-interests.service';
import { CreateTalentInterestDto } from './dto/create-talent-interest.dto';
import { UpdateTalentInterestDto } from './dto/update-talent-interest.dto';

@Controller('talent-interests')
export class TalentInterestsController {
  constructor(private readonly talentInterestsService: TalentInterestsService) {}

  @Post()
  create(@Body() createTalentInterestDto: CreateTalentInterestDto) {
    return this.talentInterestsService.create(createTalentInterestDto);
  }

  @Get()
  findAll() {
    return this.talentInterestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.talentInterestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTalentInterestDto: UpdateTalentInterestDto) {
    return this.talentInterestsService.update(+id, updateTalentInterestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talentInterestsService.remove(+id);
  }
}
