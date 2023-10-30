import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from '../../../src/adapter/driver/orders.controller';
import { OrdersService } from '../../../src/@core/application/services/orders.service';
import { IOrdersRepository } from '../../../src/@core/ports/iorder.repository';
import { PrismaOrdersRepository } from '../../../src/adapter/driven/infra/repositories/prisma-orders-repository';
import { PrismaService } from '../../../src/adapter/driven/infra/database/prisma.service';

describe('OrdersController', () => {
  let controller: OrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [
        OrdersService,
        {
          provide: IOrdersRepository,
          useClass: PrismaOrdersRepository
        },
        PrismaService
      ],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
