import { Injectable } from '@nestjs/common';
import { ICategoriesRepository } from 'src/@core/application/ports/icategory.repository';
import { Category } from 'src/@core/domain/entities/category';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class PrismaCategoriesRepository implements ICategoriesRepository {
    constructor(private prisma: PrismaService) {}

    async insert(category: Category): Promise<void>{

    }

    async update(category: Category): Promise<void>{

    }

    async findById(id: string): Promise<Category>{
        return new Category("123", "test")
    }

    async delete(id: string): Promise<void>{

    }
}
