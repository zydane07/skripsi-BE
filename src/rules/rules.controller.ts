import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseBoolPipe,
  UseGuards,
} from '@nestjs/common';
import { RulesService } from './rules.service';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { IsAdminGuard } from 'src/guard/isAdmin.guard';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('rules')
export class RulesController {
  constructor(private readonly rulesService: RulesService) {}

  @UseGuards(IsAdminGuard)
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createRuleDto: CreateRuleDto) {
    return this.rulesService.create(createRuleDto);
  }

  @Get()
  findAll(@Query('code') code: string) {
    return this.rulesService.findAll(code);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rulesService.findOne(id);
  }

  @UseGuards(IsAdminGuard)
  @UseGuards(AuthGuard)
  @Patch(':code')
  update(@Param('code') id: string, @Body() updateRuleDto: UpdateRuleDto) {
    return this.rulesService.update(id, updateRuleDto);
  }

  @UseGuards(IsAdminGuard)
  @UseGuards(AuthGuard)
  @Delete(':code')
  remove(@Param('code') id: string) {
    return this.rulesService.remove(id);
  }
}
