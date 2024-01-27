import { Module } from '@nestjs/common';
import { IOrdersRepository } from '../@core/order/repositories/iorder.repository';
import { PrismaService } from '../adapter/driven/infra/database/prisma.service';
import { PrismaOrdersRepository } from '../@core/order/repositories/prisma-orders-repository';
import { OrdersService } from '../@core/order/orders.service';
import { PaymentsController } from '../adapter/driver/payments.controller';
import { PaymentsService } from '../adapter/driven/payment/payments.service';
import { IPayment } from '../adapter/driven/payment/ipayment';
import { PaymentMercadoPago } from '../adapter/driven/payment/payment';

@Module({
  controllers: [PaymentsController],
  providers: [
    OrdersService,
    {
      provide: IOrdersRepository,
      useClass: PrismaOrdersRepository,
    },
    PrismaService,
    PaymentsService,
    {
      provide: IPayment,
      useClass: PaymentMercadoPago,
    },
  ],
})
export class PaymentsModule {}
