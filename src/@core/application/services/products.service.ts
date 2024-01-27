import { Inject, Injectable } from '@nestjs/common';
import { IProductsRepository } from '../../ports/iproduct.repository';
import { CreateProductDto } from '../../domain/dto/create-product.dto';
import { UpdateProductDto } from '../../domain/dto/update-product.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateProductCommand } from '../command/products-command';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(IProductsRepository)
    private productsRepository: IProductsRepository,
    private commandBus: CommandBus,
  ) {}

  async createProduct(createProductDto: CreateProductDto) {
    return this.commandBus.execute(
      new CreateProductCommand(
        createProductDto.name,
        createProductDto.description,
        createProductDto.categoryId,
        createProductDto.price,
      ),
    );
  }

  async findAll() {
    return await this.productsRepository.findAll();
  }

  async findOne(category: string) {
    return await this.productsRepository.findByCategory(category);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.productsRepository.update(id, updateProductDto);
  }

  async remove(id: string) {
    return await this.productsRepository.delete(id);
  }
}
