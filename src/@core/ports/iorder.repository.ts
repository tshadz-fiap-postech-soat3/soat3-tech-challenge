import { CreateOrderDto } from "../domain/dto/create-order.dto";
import { UpdateOrderDto } from "../domain/dto/update-order.dto";
import { OrderEntity, OrderStatus } from "../domain/entities/order";

export abstract class IOrdersRepository {
    public abstract insert(order: CreateOrderDto): Promise<void>;
    public abstract update(id: string, order: UpdateOrderDto): Promise<void>;
    public abstract findById(id: string): Promise<OrderEntity>;
    public abstract findAll(): Promise<OrderEntity[]>;
    public abstract findAllByStatus(status: OrderStatus): Promise<OrderEntity[]>;
    public abstract delete(id: string): Promise<void>;
}