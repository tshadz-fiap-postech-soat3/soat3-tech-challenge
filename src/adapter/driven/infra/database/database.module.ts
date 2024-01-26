import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { PrismaCategoriesRepository } from '../repositories/prisma-categories-repository';
import { ICategoriesRepository } from '../../../../@core/ports/icategory.repository';

@Module({
  exports: [ICategoriesRepository],
  imports: [ConfigModule],
  providers: [
    PrismaService,
    {
      provide: ICategoriesRepository,
      useClass: PrismaCategoriesRepository,
    },
  ],
})
export class DatabaseModule {}
