import { ApiProperty } from '@nestjs/swagger';
import { CustomerEntity } from './customer';

export class CreateCustomerDto extends CustomerEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  cpf: string;
}
