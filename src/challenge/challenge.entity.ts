// challenge.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  points: number; // Pontos ganhos ao completar o desafio
}
