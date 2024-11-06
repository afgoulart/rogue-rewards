import { DeepPartial } from 'typeorm';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Achievement } from './achievement.entity';
import { AchievementService } from './achievement.service';

@ApiTags('achievement')
@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new achievement' })
  @ApiResponse({
    status: 201,
    description: 'Achievement created successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() achievement: DeepPartial<Achievement>) {
    return this.achievementService.create(achievement);
  }

  @Get()
  findAll() {
    return this.achievementService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get achievement by ID' })
  @ApiResponse({
    status: 200,
    description: 'Achievement retrieved successfully.',
  })
  @ApiResponse({ status: 404, description: 'Achievement not found.' })
  findOne(@Param('id') id: string) {
    return this.achievementService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update achievement by ID' })
  @ApiResponse({
    status: 200,
    description: 'Achievement updated successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 404, description: 'Achievement not found.' })
  update(
    @Param('id') id: string,
    @Body() achievement: DeepPartial<Achievement>,
  ) {
    return this.achievementService.update(+id, achievement);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete achievement by ID' })
  @ApiResponse({
    status: 200,
    description: 'Achievement deleted successfully.',
  })
  @ApiResponse({ status: 404, description: 'Achievement not found.' })
  remove(@Param('id') id: string) {
    return this.achievementService.remove(+id);
  }
}
