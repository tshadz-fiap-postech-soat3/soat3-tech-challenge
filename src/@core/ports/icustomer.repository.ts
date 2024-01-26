import { CreateCustomerDto } from '../domain/dto/create-customer.dto';
import { UpdateCustomerDto } from '../domain/dto/update-customer.dto';
import { CustomerEntity } from '../domain/entities/customer';

export abstract class ICustomersRepository {
  public abstract insert(customer: CreateCustomerDto): Promise<void>;
  public abstract update(
    id: string,
    customer: UpdateCustomerDto,
  ): Promise<void>;
  public abstract findByCpf(cpf: string): Promise<CustomerEntity>;
  public abstract findAll(): Promise<CustomerEntity[]>;
  public abstract delete(id: string): Promise<void>;
}
