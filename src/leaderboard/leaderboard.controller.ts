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

import { Leaderboard } from './leaderboard.entity';
import { LeaderboardService } from './leaderboard.service';

@ApiTags('leaderboard')
@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new leaderboard entry' })
  @ApiResponse({
    status: 201,
    description: 'Leaderboard entry created successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createLeaderboardDto: DeepPartial<Leaderboard>) {
    return this.leaderboardService.create(createLeaderboardDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all leaderboard entries' })
  @ApiResponse({
    status: 200,
    description: 'Leaderboard entries retrieved successfully.',
  })
  findAll() {
    return this.leaderboardService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get leaderboard entry by ID' })
  @ApiResponse({
    status: 200,
    description: 'Leaderboard entry retrieved successfully.',
  })
  @ApiResponse({ status: 404, description: 'Leaderboard entry not found.' })
  findOne(@Param('id') id: string) {
    return this.leaderboardService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update leaderboard entry by ID' })
  @ApiResponse({
    status: 200,
    description: 'Leaderboard entry updated successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 404, description: 'Leaderboard entry not found.' })
  update(
    @Param('id') id: string,
    @Body() updateLeaderboardDto: DeepPartial<Leaderboard>,
  ) {
    return this.leaderboardService.update(+id, updateLeaderboardDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete leaderboard entry by ID' })
  @ApiResponse({
    status: 200,
    description: 'Leaderboard entry deleted successfully.',
  })
  @ApiResponse({ status: 404, description: 'Leaderboard entry not found.' })
  remove(@Param('id') id: string) {
    return this.leaderboardService.remove(+id);
  }
}
