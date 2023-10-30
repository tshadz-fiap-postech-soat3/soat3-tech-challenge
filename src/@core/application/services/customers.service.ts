import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../../domain/dto/create-customer.dto';
import { UpdateCustomerDto } from '../../domain/dto/update-customer.dto';
import { ICustomersRepository } from '../../ports/icustomer.repository';

@Injectable()
export class CustomersService {
  constructor(
    @Inject(ICustomersRepository)
    private customersRepository: ICustomersRepository
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    return await this.customersRepository.insert(createCustomerDto);
  }

  async findAll() {
    return await this.customersRepository.findAll();
  }

  async findOne(cpf: string) {
    return await this.customersRepository.findByCpf(cpf);
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return await this.customersRepository.update(id, updateCustomerDto);
  }

  async remove(id: string) {
    return await this.customersRepository.delete(id);
  }
}
