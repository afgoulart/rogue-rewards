import { DeepPartial, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Leaderboard } from './leaderboard.entity';

@Injectable()
export class LeaderboardService {
  constructor(
    @InjectRepository(Leaderboard)
    private readonly leaderboardRepository: Repository<Leaderboard>,
  ) {}

  create(createLeaderboardDto: DeepPartial<Leaderboard>) {
    const leaderboard = this.leaderboardRepository.create(createLeaderboardDto);
    return this.leaderboardRepository.save(leaderboard);
  }

  findAll() {
    return this.leaderboardRepository.find();
  }

  findOne(id: number) {
    return this.leaderboardRepository.findOneBy({ id });
  }

  update(id: number, updateLeaderboardDto: DeepPartial<Leaderboard>) {
    return this.leaderboardRepository.update(id, updateLeaderboardDto);
  }

  remove(id: number) {
    return this.leaderboardRepository.delete(id);
  }
}
