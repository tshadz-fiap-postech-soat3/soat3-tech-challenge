import { Injectable } from '@nestjs/common';
import { ICategoriesRepository } from './icategory.repository';
import { PrismaService } from '../../../adapter/driven/infra/database/prisma.service';
import { CreateCategoryDto } from '../entitites/create-category.dto';
import { UpdateCategoryDto } from '../../products/entities/update-category.dto';
import { CategoryEntity } from '../entitites/category';

@Injectable()
export class PrismaCategoriesRepository implements ICategoriesRepository {
  constructor(private prisma: PrismaService) {}

  async insert(category: CreateCategoryDto): Promise<void> {
    await this.prisma.category.create({
      data: category,
    });
  }

  async update(id: string, category: UpdateCategoryDto): Promise<void> {
    await this.prisma.category.update({
      data: category,
      where: {
        id: id,
      },
    });
  }

  async findById(id: string): Promise<CategoryEntity> {
    const result = await this.prisma.category.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    return result;
  }

  async findAll(): Promise<CategoryEntity[]> {
    const result = await this.prisma.category.findMany();
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id: id,
      },
    });
  }
}
