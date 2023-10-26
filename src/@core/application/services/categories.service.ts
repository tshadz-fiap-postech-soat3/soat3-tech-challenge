import { Injectable } from '@nestjs/common';
import { Category } from '../../domain/entities/category';
import { CreateCategoryDto } from '../../domain/dto/create-category.dto';
import { UpdateCategoryDto } from '../../domain/dto/update-category.dto';
import { ICategoriesRepository } from '../ports/icategory.repository';

@Injectable()
export class CategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository){
    
  }
  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  findAll() {
    return this.categoriesRepository.findById('123');
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
