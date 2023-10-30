import { Module } from '@nestjs/common';
import { IOrdersRepository } from '../@core/ports/iorder.repository';
import { PrismaService } from '../adapter/driven/infra/database/prisma.service';
import { PrismaOrdersRepository } from '../adapter/driven/infra/repositories/prisma-orders-repository';
import { OrdersService } from '../@core/application/services/orders.service';
import { OrdersController } from '../adapter/driver/orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [
    OrdersService,
    {
      provide: IOrdersRepository,
      useClass: PrismaOrdersRepository
    },
    PrismaService
  ],
})
export class OrdersModule {}
