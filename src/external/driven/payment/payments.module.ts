import { Module, Scope } from '@nestjs/common';
import { IOrdersRepository } from '../../../@core/order/repositories/iorder.repository';
import { PrismaService } from '../infra/database/prisma.service';
import { PrismaOrdersRepository } from '../../../@core/order/repositories/prisma-orders-repository';
import { PaymentsApi } from '../../driver/payments.api';
import { PaymentsService } from './payments.service';
import { IPayment } from './ipayment';
import { PaymentMercadoPago } from './payment';

@Module({
  controllers: [PaymentsApi],
  providers: [
    {
      provide: IOrdersRepository,
      useClass: PrismaOrdersRepository,
      scope: Scope.TRANSIENT
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
