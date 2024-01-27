import { ApiProperty } from '@nestjs/swagger';
import { OrderEntity, OrderStatus } from './order';

export class CreateOrderDto extends OrderEntity {
  @ApiProperty({ example: 'order-3' })
  id: string;

  @ApiProperty({ example: 'Aguardando Pagamento' })
  status: OrderStatus;

  @ApiProperty({ example: 'cust-1' })
  customerId: string;

  @ApiProperty({ example: 100 })
  price: number;
}
