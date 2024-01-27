import { Inject, Injectable } from '@nestjs/common';
import { UpdateOrderDto } from '../../../@core/order/entitites/update-order.dto';
import { IPayment } from './ipayment';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject(IPayment)
    private payment: IPayment,
  ) {}

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.payment.update(id, updateOrderDto);
  }
}
