import { Module } from '@nestjs/common';
import { CustomersService } from '../@core/application/services/customers.service';
import { CustomersController } from '../adapter/driver/customers.controller';
import { DatabaseModule } from '../adapter/driven/infra/database/database.module';
import { ICustomersRepository } from '../@core/ports/icustomer.repository';
import { PrismaCustomersRepository } from '../adapter/driven/infra/repositories/prisma-customers-repository';
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
