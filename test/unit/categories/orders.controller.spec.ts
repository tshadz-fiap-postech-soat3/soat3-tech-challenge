import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from '../../../src/adapter/driver/orders.controller';
import { OrdersService } from '../../../src/@core/application/services/orders.service';

describe('OrdersController', () => {
  let controller: OrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [OrdersService],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
