import { Injectable } from '@nestjs/common';
import { IOrdersRepository } from './iorder.repository';
import { PrismaService } from '../../../external/driven/infra/database/prisma.service';
import { CreateOrderDto } from '../entitites/create-order.dto';
import { UpdateOrderDto } from '../entitites/update-order.dto';
import { OrderEntity, OrderStatus } from '../entitites/order';

@Injectable()
export class PrismaOrdersRepository implements IOrdersRepository {
  constructor(private prisma: PrismaService) {}

  async insert(order: CreateOrderDto): Promise<OrderEntity> {
    const result = await this.prisma.order.create({
      data: order,
    });
    return result as unknown as OrderEntity;
  }

  async update(id: string, order: UpdateOrderDto): Promise<OrderEntity> {
    const result = await this.prisma.order.update({
      data: order,
      where: {
        id: id,
      },
    });
    return result as unknown as OrderEntity;
  }

  async findById(id: string): Promise<OrderEntity> {
    const result = await this.prisma.order.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    return result as unknown as OrderEntity;
  }

  async findAll(): Promise<OrderEntity[]> {
    const result = await this.prisma.order.findMany();
    console.log(result);
    return result as unknown as OrderEntity[];
  }

  async findAllByStatus(status: OrderStatus): Promise<OrderEntity[]> {
    const result = await this.prisma.order.findMany({
      where: {
        status: status,
      },
    });
    return result as unknown as OrderEntity[];
  }

  async delete(id: string): Promise<void> {
    await this.prisma.order.delete({
      where: {
        id: id,
      },
    });
  }

  async findAllOpen(): Promise<OrderEntity[]> {
    const result = await this.prisma.order.findMany({
      where: {
        NOT: {
          status: OrderStatus.CONCLUDED,
        },
      },
      orderBy: [
        {
          status: 'asc',
        },
        {
          createdAtDate: 'asc',
        },
      ],
    });
    return result as unknown as OrderEntity[];
  }
}
