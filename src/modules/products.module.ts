import { Module } from '@nestjs/common';
import { IProductsRepository } from '../@core/ports/iproduct.repository';
import { PrismaService } from '../adapter/driven/infra/database/prisma.service';
import { PrismaProductsRepository } from '../adapter/driven/infra/repositories/prisma-products-repository';
import { ProductsService } from '../@core/application/services/products.service';
import { ProductsController } from '../adapter/driver/products.controller';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: IProductsRepository,
      useClass: PrismaProductsRepository,
    },
    PrismaService,
  ],
})
export class ProductsModule {}
