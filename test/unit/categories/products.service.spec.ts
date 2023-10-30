import { Test, TestingModule } from '@nestjs/testing';
import { IProductsRepository } from '../../../src/@core/ports/iproduct.repository';
import { PrismaService } from '../../../src/adapter/driven/infra/database/prisma.service';
import { PrismaProductsRepository } from '../../../src/adapter/driven/infra/repositories/prisma-products-repository';
import { ProductsService } from '../../../src/@core/application/services/products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: IProductsRepository,
          useClass: PrismaProductsRepository
        },
        PrismaService
    ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
