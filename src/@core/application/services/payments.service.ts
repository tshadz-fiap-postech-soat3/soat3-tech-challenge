import { Inject, Injectable } from '@nestjs/common';
import { UpdateOrderDto } from '../../order/entitites/update-order.dto';
import { IPayment } from '../../../adapter/driven/payment/ipayment';

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
