import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
  ) {}

  create(createAuthDto: CreateAuthDto) {
    const auth = this.authRepository.create(createAuthDto);
    return this.authRepository.save(auth);
  }

  validate(username: string, password: string) {
    return this.authRepository.findOne({
      select: {
        username,
        password,
      },
    });
  }

  findAll() {
    return this.authRepository.find();
  }

  findOne(id: number) {
    return this.authRepository.findOneBy({ id });
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return this.authRepository.update(id, updateAuthDto);
  }

  remove(id: number) {
    return this.authRepository.delete(id);
  }
}
