import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../../domain/dto/create-category.dto';
import { UpdateCategoryDto } from '../../domain/dto/update-category.dto';
import { ICategoriesRepository } from '../../ports/icategory.repository';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(ICategoriesRepository)
    private categoriesRepository: ICategoriesRepository
    ) {}
  
  async create(createCategoryDto: CreateCategoryDto): Promise<void> {
    return await this.categoriesRepository.insert(createCategoryDto)
  }

  async findAll() {
    return await this.categoriesRepository.findAll();
  }

  async findOne(id: string) {
    return await this.categoriesRepository.findById(id)
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoriesRepository.update(id, updateCategoryDto)
  }

  async remove(id: string) {
    return await this.categoriesRepository.delete(id)
  }
}
