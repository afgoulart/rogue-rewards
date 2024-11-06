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

import { Challenge } from './challenge.entity';
import { ChallengeService } from './challenge.service';

@ApiTags('challenge')
@Controller('challenge')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new challenge' })
  @ApiResponse({ status: 201, description: 'Challenge created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createChallengeDto: DeepPartial<Challenge>) {
    return this.challengeService.create(createChallengeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all challenges' })
  @ApiResponse({
    status: 200,
    description: 'Challenges retrieved successfully.',
  })
  findAll() {
    return this.challengeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get challenge by ID' })
  @ApiResponse({
    status: 200,
    description: 'Challenge retrieved successfully.',
  })
  @ApiResponse({ status: 404, description: 'Challenge not found.' })
  findOne(@Param('id') id: string) {
    return this.challengeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update challenge by ID' })
  @ApiResponse({ status: 200, description: 'Challenge updated successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 404, description: 'Challenge not found.' })
  update(
    @Param('id') id: string,
    @Body() updateChallengeDto: DeepPartial<Challenge>,
  ) {
    return this.challengeService.update(+id, updateChallengeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete challenge by ID' })
  @ApiResponse({ status: 200, description: 'Challenge deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Challenge not found.' })
  remove(@Param('id') id: string) {
    return this.challengeService.remove(+id);
  }
}
