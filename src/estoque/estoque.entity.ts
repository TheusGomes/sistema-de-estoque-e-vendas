import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EstoqueService } from './estoque.service';

@Entity()
export class Estoque {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  quantidade: number;

  @Column()
  preco: number;
}
