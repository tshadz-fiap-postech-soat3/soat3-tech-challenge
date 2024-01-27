import { Injectable } from '@nestjs/common';
import { ICustomersRepository } from './icustomer.repository';
import { PrismaService } from '../../../adapter/driven/infra/database/prisma.service';
import { CreateCustomerDto } from '../entitites/create-customer.dto';
import { UpdateCustomerDto } from '../entitites/update-customer.dto';
import { CustomerEntity } from '../entitites/customer';

@Injectable()
export class PrismaCustomersRepository implements ICustomersRepository {
  constructor(private prisma: PrismaService) {}

  async insert(customer: CreateCustomerDto): Promise<void> {
    await this.prisma.customer.create({
      data: customer,
    });
  }

  async update(id: string, customer: UpdateCustomerDto): Promise<void> {
    await this.prisma.customer.update({
      data: customer,
      where: {
        id: id,
      },
    });
  }

  async findByCpf(cpf: string): Promise<CustomerEntity> {
    const result = await this.prisma.customer.findUniqueOrThrow({
      where: {
        cpf: cpf,
      },
    });
    return result;
  }

  async findAll(): Promise<CustomerEntity[]> {
    const result = await this.prisma.customer.findMany();
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.customer.delete({
      where: {
        id: id,
      },
    });
  }
}
