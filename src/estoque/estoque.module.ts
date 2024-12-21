import { Module } from '@nestjs/common';
import { EstoqueController } from './estoque.controller';
import { EstoqueService } from './estoque.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estoque } from './estoque.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Estoque]),
  ],
  providers: [EstoqueService],
  controllers: [EstoqueController],
})
export class EstoqueModule {}