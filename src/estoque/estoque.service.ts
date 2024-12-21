import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estoque } from './estoque.entity';

@Injectable()
export class EstoqueService {
  [x: string]: any;
  constructor(
    @InjectRepository(Estoque)
    private estoqueRepository: Repository<Estoque>,
  ) {}

  async criarProduto(nome: string, quantidade: number, preco: number): Promise<Estoque> {
    const produto = this.estoqueRepository.create({ nome, quantidade, preco });
    return this.estoqueRepository.save(produto);
  }

  async listarProdutos(): Promise<Estoque[]> {
    return this.estoqueRepository.find();
  }

  async atualizarProduto(id: number, quantidade: number): Promise<Estoque> {
    const produto = await this.estoqueRepository.findOne({ where: { id } });
    if (!produto) {
      throw new Error('Produto não encontrado');
    }
    produto.quantidade = quantidade;
    return this.estoqueRepository.save(produto);
  }
}
