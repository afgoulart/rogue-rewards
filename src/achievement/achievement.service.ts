import { Injectable } from '@nestjs/common';
import { CreateAchievementDto } from './dto/create-Achievement.dto';
import { UpdateAchievementDto } from './dto/update-Achievement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Achievement } from './achievement.entity';

@Injectable()
export class AchievementService {
  constructor(
    @InjectRepository(Achievement)
    private readonly AchievementRepository: Repository<Achievement>,
  ) {}

  create(createAchievementDto: CreateAchievementDto) {
    const Achievement = this.AchievementRepository.create(createAchievementDto);
    return this.AchievementRepository.save(Achievement);
  }

  findAll() {
    return this.AchievementRepository.find();
  }

  findOne(id: number) {
    return this.AchievementRepository.findOneBy({ id });
  }

  update(id: number, updateAchievementDto: UpdateAchievementDto) {
    return this.AchievementRepository.update(id, updateAchievementDto);
  }

  remove(id: number) {
    return this.AchievementRepository.delete(id);
  }
}
