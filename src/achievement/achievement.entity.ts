import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Achievement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  badgeName: string;

  @Column()
  badgeUrl?: string;
}
