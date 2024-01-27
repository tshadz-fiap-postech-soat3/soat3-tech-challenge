import { Module } from '@nestjs/common';
import { ICategoriesRepository } from './repositories/icategory.repository';
import { PrismaService } from '../../adapter/driven/infra/database/prisma.service';
import { PrismaCategoriesRepository } from './repositories/prisma-categories-repository';
import { CategoriesService } from './categories.service';
import { CategoriesApi } from '../../adapter/driver/categories.api';
import { ICategoriesService } from './icategories.service';
import { CategoriesController } from './controller/categories.controller';
import { ICategoriesController } from './controller/icategories-controller';

@Module({
  controllers: [CategoriesApi],
  providers: [
    PrismaCategoriesRepository,
    {
      provide: ICategoriesRepository,
      useClass: PrismaCategoriesRepository,
    },
    CategoriesService,
    {
      provide: ICategoriesService,
      useClass: CategoriesService,
    },
    CategoriesController,
    {
      provide: ICategoriesController,
      useClass: CategoriesController,
    },
    PrismaService,
  ],
})
export class CategoriesModule {}
