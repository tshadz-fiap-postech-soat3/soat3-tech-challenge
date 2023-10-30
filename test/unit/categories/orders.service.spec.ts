import { Test, TestingModule } from '@nestjs/testing';
import { IOrdersRepository } from '../../../src/@core/ports/iorder.repository';
import { PrismaService } from '../../../src/adapter/driven/infra/database/prisma.service';
import { PrismaOrdersRepository } from '../../../src/adapter/driven/infra/repositories/prisma-orders-repository';
import { OrdersService } from '../../../src/@core/application/services/orders.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: IOrdersRepository,
          useClass: PrismaOrdersRepository
        },
        PrismaService
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
