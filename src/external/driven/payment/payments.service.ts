import { Inject, Injectable } from '@nestjs/common';
import { UpdateOrderDto } from '../../../@core/order/entitites/update-order.dto';
import { IPayment } from './ipayment';
import { IOrdersRepository } from '../../../@core/order/repositories/iorder.repository';
import { OrderStatus } from '../../../@core/order/entitites/order';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject(IOrdersRepository)
    private payment: IPayment,
    private ordersRepository: IOrdersRepository,
  ) {}

  async update(id: string) {
    const checkPayment = this.payment.update(id);


    const order = new UpdateOrderDto();
    order.status = OrderStatus.PLACED;
    this.ordersRepository.update(id, order ) ;
  }
}
