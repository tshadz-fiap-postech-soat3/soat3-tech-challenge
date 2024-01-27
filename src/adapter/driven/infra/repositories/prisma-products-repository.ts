import { Injectable } from '@nestjs/common';
import { IProductsRepository } from '../../../../@core/ports/iproduct.repository';
import { PrismaService } from '../database/prisma.service';
import { UpdateProductDto } from '../../../../@core/domain/dto/update-product.dto';
import { ProductEntity } from '../../../../@core/domain/entities/product';
import { ResultSuccess } from '../../../../@core/application/result/result-success';
import { Result } from '../../../../@core/application/result/result';
import { CreateProductCommand } from '../../../../@core/application/command/products-command';
import { ProductMapper } from '../../../../@core/domain/mapper/product-mapper';

@Injectable()
export class PrismaProductsRepository implements IProductsRepository {
  constructor(private prisma: PrismaService) {}

  async insert(product: CreateProductCommand): Promise<Result<ProductEntity>> {
    const createdProduct = await this.prisma.product.create({
      data: product,
    });
    return new ResultSuccess(new ProductMapper(createdProduct).toDomain());
  }

  async update(id: string, product: UpdateProductDto): Promise<void> {
    await this.prisma.product.update({
      data: product,
      where: {
        id: id,
      },
    });
  }

  async findByCategory(category: string): Promise<ProductEntity> {
    const result = await this.prisma.product.findFirstOrThrow({
      where: {
        categoryId: category,
      },
    });
    return result;
  }

  async findByName(name: string): Promise<ProductEntity> {
    const result = await this.prisma.product.findFirstOrThrow({
      where: {
        name: name,
      },
    });
    return result;
  }

  async findAll(): Promise<ProductEntity[]> {
    const result = await this.prisma.product.findMany();
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id: id,
      },
    });
  }
}
