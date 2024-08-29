import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';

@Controller('Achievement')
export class AchievementController {
  constructor(private readonly AchievementService: AchievementService) {}

  @Post()
  create(@Body() createAchievementDto: CreateAchievementDto) {
    return this.AchievementService.create(createAchievementDto);
  }

  @Get()
  findAll() {
    return this.AchievementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.AchievementService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAchievementDto: UpdateAchievementDto,
  ) {
    return this.AchievementService.update(+id, updateAchievementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.AchievementService.remove(+id);
  }
}
