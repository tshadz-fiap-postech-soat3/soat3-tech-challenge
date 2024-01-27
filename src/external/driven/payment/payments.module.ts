import { Module } from '@nestjs/common';
import { IOrdersRepository } from '../../../@core/order/repositories/iorder.repository';
import { PrismaService } from '../infra/database/prisma.service';
import { PrismaOrdersRepository } from '../../../@core/order/repositories/prisma-orders-repository';
import { OrdersService } from '../../../@core/order/orders.service';
import { PaymentsController } from '../../driver/payments.controller';
import { PaymentsService } from './payments.service';
import { IPayment } from './ipayment';
import { PaymentMercadoPago } from './payment';
import { OrdersController } from '../../../@core/order/controller/orders.controller';
import { IOrdersController } from '../../../@core/order/controller/iorders-controller';
import { IOrdersService } from '../../../@core/order/iorders.service';

@Module({
  controllers: [PaymentsController],
  providers: [
    OrdersService,
    {
      provide: IOrdersService,
      useClass: OrdersService,
    },
    OrdersController,
    {
      provide: IOrdersController,
      useClass: OrdersController,
    },
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
