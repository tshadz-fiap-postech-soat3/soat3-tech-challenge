import { Module } from '@nestjs/common';
import { ICategoriesRepository } from '../@core/ports/icategory.repository';
import { PrismaService } from '../adapter/driven/infra/database/prisma.service';
import { PrismaCategoriesRepository } from '../adapter/driven/infra/repositories/prisma-categories-repository';
import { CategoriesService } from '../@core/application/services/categories.service';
import { DatabaseModule } from '../adapter/driven/infra/database/database.module';
import { CategoriesController } from '../adapter/driver/categories.controller';

@Module({
  controllers: [CategoriesController],
  imports: [DatabaseModule],
  providers: [
    CategoriesService,
    {
      provide: ICategoriesRepository,
      useClass: PrismaCategoriesRepository,
    },
    PrismaService,
  ],
})
export class CategoriesModule {}
