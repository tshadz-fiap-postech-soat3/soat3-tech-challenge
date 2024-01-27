import { Inject, Injectable } from '@nestjs/common';
import { IOrderItemsRepository } from './repositories/iorder-items.repository';
import { CreateOrderItemDto } from './entitites/create-order-item.dto';
import { UpdateOrderItemDto } from './entitites/update-order-item.dto';

@Injectable()
export class OrderItemsService {
  constructor(
    @Inject(IOrderItemsRepository)
    private orderItemsRepository: IOrderItemsRepository,
  ) {}

  async create(createOrderItemDto: CreateOrderItemDto[]) {
    return await this.orderItemsRepository.insert(createOrderItemDto);
  }

  async findAll() {
    return await this.orderItemsRepository.findAll();
  }

  async findOne(id: string) {
    return await this.orderItemsRepository.findByOrderId(id);
  }

  async update(id: string, updateOrderItemDto: UpdateOrderItemDto) {
    return await this.orderItemsRepository.update(id, updateOrderItemDto);
  }

  async remove(id: string) {
    return await this.orderItemsRepository.delete(id);
  }
}
