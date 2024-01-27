import { Module } from '@nestjs/common';
import { IProductsRepository } from '../@core/ports/iproduct.repository';
import { PrismaService } from '../adapter/driven/infra/database/prisma.service';
import { PrismaProductsRepository } from '../adapter/driven/infra/repositories/prisma-products-repository';
import { ProductsService } from '../@core/application/services/products.service';
import { ProductsController } from '../adapter/driver/products.controller';
import { CreateProductCommandHandler } from 'src/@core/application/command-handler/products-command-handler';

export const CommandHandlers = [CreateProductCommandHandler];
@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: IProductsRepository,
      useClass: PrismaProductsRepository,
    },
    ...CommandHandlers,
    PrismaService,
  ],
})
export class ProductsModule {}
