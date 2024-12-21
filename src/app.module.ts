import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstoqueModule } from './estoque/estoque.module';
import { VendasModule } from './vendas/vendas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'usuario',
      password: 'senha',
      database: 'sistema_estoque_vendas',
      entities: [],
      synchronize: true, // Atenção em produção
    }),
    EstoqueModule,
    VendasModule,
  ],
})
export class AppModule {}
