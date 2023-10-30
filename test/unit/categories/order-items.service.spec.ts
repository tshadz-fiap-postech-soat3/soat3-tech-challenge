import { Test, TestingModule } from '@nestjs/testing';
import { IOrderItemsRepository } from '../../../src/@core/ports/iorder-items.repository';
import { IOrdersRepository } from '../../../src/@core/ports/iorder.repository';
import { PrismaService } from '../../../src/adapter/driven/infra/database/prisma.service';
import { PrismaOrderItemsRepository } from '../../../src/adapter/driven/infra/repositories/prisma-order-items-repository';
import { OrderItemsService } from '../../../src/@core/application/services/order-items.service';

describe('OrderItemsService', () => {
  let service: OrderItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
         OrderItemsService,
        {
          provide: IOrderItemsRepository,
          useClass: PrismaOrderItemsRepository
        },
        PrismaService
      ],
    }).compile();

    service = module.get<OrderItemsService>(OrderItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
