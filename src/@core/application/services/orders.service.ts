import { Inject, Injectable } from '@nestjs/common';
import { IOrdersRepository } from '../../ports/iorder.repository';
import { CreateOrderDto } from '../../domain/dto/create-order.dto';
import { UpdateOrderDto } from '../../domain/dto/update-order.dto';
import { OrderStatus } from 'src/@core/domain/entities/order';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(IOrdersRepository)
    private ordersRepository: IOrdersRepository,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    return await this.ordersRepository.insert(createOrderDto);
  }

  async findAll() {
    return await this.ordersRepository.findAll();
  }

  async findAllByStatus(status: OrderStatus) {
    return await this.ordersRepository.findAllByStatus(status);
  }

  async findOne(id: string) {
    return await this.ordersRepository.findById(id);
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return await this.ordersRepository.update(id, updateOrderDto);
  }

  async remove(id: string) {
    return await this.ordersRepository.delete(id);
  }
}
