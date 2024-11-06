import { DeepPartial, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Challenge } from './challenge.entity';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectRepository(Challenge)
    private readonly challengeRepository: Repository<Challenge>,
  ) {}

  create(createChallengeDto: DeepPartial<Challenge>) {
    const challenge = this.challengeRepository.create(createChallengeDto);
    return this.challengeRepository.save(challenge);
  }

  findAll() {
    return this.challengeRepository.find();
  }

  findOne(id: number) {
    return this.challengeRepository.findOneBy({ id });
  }

  update(id: number, updateChallengeDto: DeepPartial<Challenge>) {
    return this.challengeRepository.update(id, updateChallengeDto);
  }

  remove(id: number) {
    return this.challengeRepository.delete(id);
  }
}
