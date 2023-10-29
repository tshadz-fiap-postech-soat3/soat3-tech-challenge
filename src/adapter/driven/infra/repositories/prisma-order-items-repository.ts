import { Injectable } from '@nestjs/common';
import { IOrderItemsRepository } from '../../../../@core/ports/iorder-items.repository';
import { PrismaService } from '../database/prisma.service';
import { CreateOrderItemDto } from '../../../../@core/domain/dto/create-order-item.dto';
import { UpdateOrderItemDto } from '../../../../@core/domain/dto/update-order-item.dto';
import { OrderItemEntity } from '../../../../@core/domain/entities/order-item';

@Injectable()
export class PrismaOrderItemsRepository implements IOrderItemsRepository {
    constructor(private prisma: PrismaService) {}

    async insert(order: CreateOrderItemDto): Promise<void>{
        await this.prisma.orderItems.create({
            data: order
        })
    }

    async update(id: string, order: UpdateOrderItemDto): Promise<void>{
        await this.prisma.orderItems.update({
            data: order,
            where: {
                id: id
            }
        })
    }

    async findById(id: string): Promise<OrderItemEntity>{
        const result = await this.prisma.orderItems.findFirstOrThrow({
            where: {
                id: id
            }
        })
        return result as unknown as OrderItemEntity;
    }

    async findAll(): Promise<OrderItemEntity[]>{
        const result = await this.prisma.orderItems.findMany()
        return result as unknown as OrderItemEntity[];
    }

    async delete(id: string): Promise<void>{
        await this.prisma.orderItems.delete({
            where: {
                id: id
            }
        })

    }
}
