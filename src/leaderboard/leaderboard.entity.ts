import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Leaderboard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number; // Relacionamento com a entidade User

  @Column()
  score: number; // Pontuação do usuário no ranking
}
