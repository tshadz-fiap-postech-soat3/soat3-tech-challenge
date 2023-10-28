import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from '../../../src/@core/application/services/customers.service';
import { CreateCustomerDto } from '../../../src/@core/domain/dto/create-customer.dto';
import { PrismaService } from '../../../src/adapter/driven/infra/database/prisma.service';
import { ICustomersRepository } from '../../../src/@core/ports/icustomer.repository';
import { PrismaCustomersRepository } from '../../../src/adapter/driven/infra/repositories/prisma-customers-repository';


describe('CustomersService', () => {
  let service: CustomersService;
  let prisma: PrismaService;

  const customerMockedData: CreateCustomerDto = {
    id: "test",
    name: "test",
    cpf: "12345678910"
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomersService,
        {
          provide: ICustomersRepository,
          useClass: PrismaCustomersRepository,
        },
        PrismaService
      ],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });


  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {

    it('should return an array of users', async() => {

      prisma.customer.findMany = jest.fn().mockReturnValue([customerMockedData]);

      const result = await service.findAll();

      expect(result).toEqual([customerMockedData]);
      expect(prisma.customer.findMany).toHaveBeenCalledTimes(1);
    })

  });

});
