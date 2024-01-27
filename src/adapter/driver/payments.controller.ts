import { Controller, Patch, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaymentsService } from '../driven/payment/payments.service';
import { OrderStatus } from '../../@core/order/entitites/order';
import { OrdersService } from '../../@core/order/orders.service';
import { UpdateOrderDto } from '../../@core/order/entitites/update-order.dto';

@ApiTags('payment')
@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly paymentsService: PaymentsService,
  ) {}

  @Patch(':id')
  @ApiOperation({ summary: 'make a payment' })
  async update(@Param('id') id: string) {
    const order = await this.ordersService.findOne(id);

    const paymentIsTrue = this.paymentsService.update(id, order);

    const orderPaid = {
      status: OrderStatus.PLACED,
      updatedAtDate: new Date(),
    } as UpdateOrderDto;

    if (!paymentIsTrue) {
      throw new Error();
    }
    return await this.ordersService.update(id, orderPaid);
  }
}
