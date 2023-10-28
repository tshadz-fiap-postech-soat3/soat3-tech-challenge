import { Inject, Injectable } from '@nestjs/common';
import { IProductsRepository } from 'src/@core/ports/iproduct.repository';
import { CreateProductDto } from '../../domain/dto/create-product.dto';
import { UpdateProductDto } from '../../domain/dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(IProductsRepository)
    private productsRepository: IProductsRepository
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productsRepository.insert(createProductDto)
  }

  async findAll() {
    return await this.productsRepository.findAll();
  }

  async findOne(id: string) {
    return await this.productsRepository.findById(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.productsRepository.update(id, updateProductDto);
  }

  async remove(id: string) {
    return await this.productsRepository.delete(id);
  }
}
