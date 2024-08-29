import { Injectable } from '@nestjs/common';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Challenge } from './challenge.entity';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectRepository(Challenge)
    private readonly challengeRepository: Repository<Challenge>,
  ) {}

  create(createChallengeDto: CreateChallengeDto) {
    const challenge = this.challengeRepository.create(createChallengeDto);
    return this.challengeRepository.save(challenge);
  }

  findAll() {
    return this.challengeRepository.find();
  }

  findOne(id: number) {
    return this.challengeRepository.findOneBy({ id });
  }

  update(id: number, updateChallengeDto: UpdateChallengeDto) {
    return this.challengeRepository.update(id, updateChallengeDto);
  }

  remove(id: number) {
    return this.challengeRepository.delete(id);
  }
}
