import { Test, TestingModule } from '@nestjs/testing';
import { OrderItemsController } from '../../../src/adapter/driver/order-items.controller';
import { OrderItemsService } from '../../../src/@core/application/services/order-items.service';

describe('OrderItemsController', () => {
  let controller: OrderItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderItemsController],
      providers: [OrderItemsService],
    }).compile();

    controller = module.get<OrderItemsController>(OrderItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
