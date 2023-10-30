import { Inject, Injectable } from '@nestjs/common';
import { IOrdersRepository } from '../../ports/iorder.repository';
import { CreateOrderDto } from '../../domain/dto/create-order.dto';
import { UpdateOrderDto } from '../../domain/dto/update-order.dto';
import { OrderStatus } from '../../domain/entities/order';
import { IPayment } from '../../../@core/ports/ipayment';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject(IPayment)
    private payment: IPayment
  ) {}

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.payment.update(id, updateOrderDto);
  }

}
