import { DeepPartial, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Achievement } from './achievement.entity';

@Injectable()
export class AchievementService {
  constructor(
    @InjectRepository(Achievement)
    private readonly AchievementRepository: Repository<Achievement>,
  ) {}

  create(createAchievementDto: DeepPartial<Achievement>) {
    const Achievement = this.AchievementRepository.create(createAchievementDto);
    return this.AchievementRepository.save(Achievement);
  }

  findAll() {
    return this.AchievementRepository.find();
  }

  findOne(id: number) {
    return this.AchievementRepository.findOneBy({ id });
  }

  update(id: number, updateAchievementDto: DeepPartial<Achievement>) {
    return this.AchievementRepository.update(id, updateAchievementDto);
  }

  remove(id: number) {
    return this.AchievementRepository.delete(id);
  }
}
