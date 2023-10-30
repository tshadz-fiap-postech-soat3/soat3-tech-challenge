import { Injectable } from '@nestjs/common';
import { IOrdersRepository } from '../../../../@core/ports/iorder.repository';
import { PrismaService } from '../database/prisma.service';
import { CreateOrderDto } from '../../../../@core/domain/dto/create-order.dto';
import { UpdateOrderDto } from '../../../../@core/domain/dto/update-order.dto';
import { OrderEntity } from '../../../../@core/domain/entities/order';

@Injectable()
export class PrismaOrdersRepository implements IOrdersRepository {
    constructor(private prisma: PrismaService) {}

    async insert(order: CreateOrderDto): Promise<void>{
        await this.prisma.order.create({
            data: order
        })
    }

    async update(id: string, order: UpdateOrderDto): Promise<void>{
        await this.prisma.order.update({
            data: order,
            where: {
                id: id
            }
        })
    }

    async findById(id: string): Promise<OrderEntity>{
        const result = await this.prisma.order.findUniqueOrThrow({
            where: {
                id: id
            }
        })
        return result as unknown as OrderEntity;
    }

    async findAll(): Promise<OrderEntity[]>{
        const result = await this.prisma.order.findMany()
        return result as unknown as OrderEntity[];
    }

    async delete(id: string): Promise<void>{
        await this.prisma.order.delete({
            where: {
                id: id
            }
        })

    }
}
