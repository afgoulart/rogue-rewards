import { Injectable } from '@nestjs/common';
import { CreateLeaderboardDto } from './dto/create-leaderboard.dto';
import { UpdateLeaderboardDto } from './dto/update-leaderboard.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Leaderboard } from './leaderboard.entity';

@Injectable()
export class LeaderboardService {
  constructor(
    @InjectRepository(Leaderboard)
    private readonly leaderboardRepository: Repository<Leaderboard>,
  ) {}

  create(createLeaderboardDto: CreateLeaderboardDto) {
    const leaderboard = this.leaderboardRepository.create(createLeaderboardDto);
    return this.leaderboardRepository.save(leaderboard);
  }

  findAll() {
    return this.leaderboardRepository.find();
  }

  findOne(id: number) {
    return this.leaderboardRepository.findOneBy({ id });
  }

  update(id: number, updateLeaderboardDto: UpdateLeaderboardDto) {
    return this.leaderboardRepository.update(id, updateLeaderboardDto);
  }

  remove(id: number) {
    return this.leaderboardRepository.delete(id);
  }
}
