import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  // Adicione suas colunas aqui
  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
