import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from '../../../src/adapter/driver/customers.controller';
import { CustomersService } from '../../../src/@core/application/services/customers.service';
import { PrismaService } from '../../../src/adapter/driven/infra/database/prisma.service';
import { ICustomersRepository } from '../../../src/@core/customer/repositories/icustomer.repository';
import { PrismaCustomersRepository } from '../../../src/@core/customer/repositories/prisma-customers-repository';

describe('CustomersController', () => {
  let controller: CustomersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [
        CustomersService,
        {
          provide: ICustomersRepository,
          useClass: PrismaCustomersRepository,
        },
        PrismaService,
      ],
    }).compile();

    controller = module.get<CustomersController>(CustomersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
