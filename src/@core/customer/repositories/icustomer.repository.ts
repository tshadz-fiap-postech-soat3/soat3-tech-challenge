import { CreateCustomerDto } from '../entitites/create-customer.dto';
import { UpdateCustomerDto } from '../entitites/update-customer.dto';
import { CustomerEntity } from '../entitites/customer';

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
