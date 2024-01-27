import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../../category/entitites/create-category.dto';
import { UpdateCategoryDto } from '../../products/entities/update-category.dto';
import { ICategoriesRepository } from '../../category/repositories/icategory.repository';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(ICategoriesRepository)
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<void> {
    return await this.categoriesRepository.insert(createCategoryDto);
  }

  async findAll() {
    return await this.categoriesRepository.findAll();
  }

  async findOne(id: string) {
    return await this.categoriesRepository.findById(id);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoriesRepository.update(id, updateCategoryDto);
  }

  async remove(id: string) {
    return await this.categoriesRepository.delete(id);
  }
}
