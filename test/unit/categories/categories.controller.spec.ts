import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from '../../../src/adapter/driver/categories.controller';
import { CategoriesService } from '../../../src/@core/application/services/categories.service';
import { PrismaService } from '../../../src/adapter/driven/infra/database/prisma.service';
import { ICategoriesRepository } from '../../../src/@core/ports/icategory.repository';
import { PrismaCategoriesRepository } from '../../../src/adapter/driven/infra/repositories/prisma-categories-repository';

describe('CategoriesController', () => {
  let controller: CategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [
        CategoriesService,
        {
          provide: ICategoriesRepository,
          useClass: PrismaCategoriesRepository,
        },
        PrismaService,
      ],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
