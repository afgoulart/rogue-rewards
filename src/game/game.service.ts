import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
  ) {}

  create(createGameDto: CreateGameDto) {
    const game = this.gameRepository.create(createGameDto);
    return this.gameRepository.save(game);
  }

  findAll() {
    return this.gameRepository.find();
  }

  findOne(id: number) {
    return this.gameRepository.findOneBy({ id });
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return this.gameRepository.update(id, updateGameDto);
  }

  remove(id: number) {
    return this.gameRepository.delete(id);
  }
}
