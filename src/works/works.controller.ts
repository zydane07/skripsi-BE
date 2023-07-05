import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { WorksService } from './works.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { IsAdminGuard } from 'src/guard/isAdmin.guard';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @UseGuards(IsAdminGuard)
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createWorkDto: CreateWorkDto) {
    return this.worksService.create(createWorkDto);
  }

  @Get()
  findAll() {
    return this.worksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.worksService.findOne(+id);
  }

  @UseGuards(IsAdminGuard)
  @UseGuards(AuthGuard)
  @Patch(':code')
  @UsePipes(ValidationPipe)
  update(@Param('code') id: string, @Body() updateWorkDto: UpdateWorkDto) {
    return this.worksService.update(id, updateWorkDto);
  }

  @UseGuards(IsAdminGuard)
  @UseGuards(AuthGuard)
  @Delete(':code')
  async remove(@Param('code') id: string) {
    return this.worksService.remove(id);
  }
}
