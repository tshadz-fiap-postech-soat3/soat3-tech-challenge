import { Inject, Injectable } from '@nestjs/common';
import { UpdateOrderDto } from '../../domain/dto/update-order.dto';
import { IPayment } from '../../../@core/ports/ipayment';

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
