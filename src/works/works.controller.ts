import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ConflictException,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { WorksService } from './works.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('works')
export class WorksController {
  constructor(
    private prisma: PrismaService,
    private readonly worksService: WorksService,
  ) {}

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

  @Patch(':code')
  @UsePipes(ValidationPipe)
  update(@Param('code') id: string, @Body() updateWorkDto: UpdateWorkDto) {
    return this.worksService.update(id, updateWorkDto);
  }

  @Delete(':code')
  async remove(@Param('code') id: string) {
    return this.worksService.remove(id);
  }
}
