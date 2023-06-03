import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TalentsService } from './talents.service';
import { CreateTalentDto } from './dto/create-talent.dto';
import { UpdateTalentDto } from './dto/update-talent.dto';
import { AuthGuard } from 'src/guard/auth.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/type/role.enum';
import { IsAdminGuard } from 'src/guard/isAdmin.guard';

@Controller('talents')
export class TalentsController {
  constructor(private readonly talentsService: TalentsService) {}

  @Post()
  create(@Body() createTalentDto: CreateTalentDto) {
    return this.talentsService.create(createTalentDto);
  }

  @Roles(Role.Admin)
  @Get()
  findAll() {
    return this.talentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.talentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTalentDto: UpdateTalentDto) {
    return this.talentsService.update(+id, updateTalentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talentsService.remove(+id);
  }
}
