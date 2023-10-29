import { CreateOrderItemDto } from "../domain/dto/create-order-item.dto";
import { UpdateOrderItemDto } from "../domain/dto/update-order-item.dto";
import { OrderItemEntity } from "../domain/entities/order-item";

export abstract class IOrderItemsRepository {
    public abstract insert(order: CreateOrderItemDto): Promise<void>;
    public abstract update(id: string, order: UpdateOrderItemDto): Promise<void>;
    public abstract findById(id: string): Promise<OrderItemEntity>;
    public abstract findAll(): Promise<OrderItemEntity[]>;
    public abstract delete(id: string): Promise<void>;
}