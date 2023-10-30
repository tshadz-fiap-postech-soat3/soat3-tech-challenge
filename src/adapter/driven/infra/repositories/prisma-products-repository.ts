import { Injectable } from '@nestjs/common';
import { IProductsRepository } from '../../../../@core/ports/iproduct.repository';
import { PrismaService } from '../database/prisma.service';
import { CreateProductDto } from '../../../../@core/domain/dto/create-product.dto';
import { UpdateProductDto } from '../../../../@core/domain/dto/update-product.dto';
import { ProductEntity } from '../../../../@core/domain/entities/product';

@Injectable()
export class PrismaProductsRepository implements IProductsRepository {
    constructor(private prisma: PrismaService) {}

    async insert(product: CreateProductDto): Promise<void>{
        await this.prisma.product.create({
            data: product
        })
    }

    async update(id: string, product: UpdateProductDto): Promise<void>{
        await this.prisma.product.update({
            data: product,
            where: {
                id: id
            }
        })
    }

    async findById(id: string): Promise<ProductEntity>{
        const result = await this.prisma.product.findUniqueOrThrow({
            where: {
                id: id
            }
        })
        return result;
    }

    async findAll(): Promise<ProductEntity[]>{
        const result = await this.prisma.product.findMany()
        return result;
    }

    async delete(id: string): Promise<void>{
        await this.prisma.product.delete({
            where: {
                id: id
            }
        })

    }
}
