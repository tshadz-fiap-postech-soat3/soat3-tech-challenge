import { Result } from '../application/result/result';
import { CreateOrderDto } from './entitites/create-order.dto';
import { OrderEntity } from './entitites/order';
import { UpdateOrderDto } from './entitites/update-order.dto';

export abstract class IOrdersService {
  public abstract create(
    order: CreateOrderDto,
  ): Promise<Result<OrderEntity>>;
  public abstract update(
    id: string,
    order: UpdateOrderDto,
  ): Promise<Result<OrderEntity>>;
  public abstract findOne(category: string): Promise<Result<OrderEntity>>;
  public abstract findAllByStatus(name: string): Promise<Result<OrderEntity[]>>;
  public abstract findAll(): Promise<Result<OrderEntity[]>>;
  public abstract remove(id: string): Promise<void>;
  public abstract findAllOpen(): Promise<Result<OrderEntity[]>>;
}
