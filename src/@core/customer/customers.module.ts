import { Module } from '@nestjs/common';
import { CustomersService } from '../application/services/customers.service';
import { CustomersController } from '../../adapter/driver/customers.controller';
import { DatabaseModule } from '../../adapter/driven/infra/database/database.module';
import { ICustomersRepository } from './repositories/icustomer.repository';
import { PrismaCustomersRepository } from './repositories/prisma-customers-repository';
import { PrismaService } from 'src/adapter/driven/infra/database/prisma.service';

@Module({
  controllers: [CustomersController],
  imports: [DatabaseModule],
  providers: [
    CustomersService,
    {
      provide: ICustomersRepository,
      useClass: PrismaCustomersRepository,
    },
    PrismaService,
  ],
})
export class CustomersModule {}
