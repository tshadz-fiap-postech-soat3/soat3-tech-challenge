import { Module } from '@nestjs/common';
import { IProductsRepository } from 'src/@core/ports/iproduct.repository';
import { PrismaService } from 'src/adapter/driven/infra/database/prisma.service';
import { PrismaProductsRepository } from 'src/adapter/driven/infra/repositories/prisma-products-repository';
import { ProductsService } from '../@core/application/services/products.service';
import { ProductsController } from '../adapter/driver/products.controller';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: IProductsRepository,
      useClass: PrismaProductsRepository
    }, PrismaService
  ],
})
export class ProductsModule {}
