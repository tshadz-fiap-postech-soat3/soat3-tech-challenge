import { Module } from '@nestjs/common';
import { IOrderItemsRepository } from '../@core/ports/iorder-items.repository';
import { PrismaService } from '../adapter/driven/infra/database/prisma.service';
import { OrderItemsService } from '../@core/application/services/order-items.service';
import { OrderItemsController } from '../adapter/driver/order-items.controller';
import { PrismaOrderItemsRepository } from '../adapter/driven/infra/repositories/prisma-order-items-repository';

@Module({
  controllers: [OrderItemsController],
  providers: [
    OrderItemsService,
    {
      provide: IOrderItemsRepository,
      useClass: PrismaOrderItemsRepository,
    },
    PrismaService,
  ],
})
export class OrderItemsModule {}
