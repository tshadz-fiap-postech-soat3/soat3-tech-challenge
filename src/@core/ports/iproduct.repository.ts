import { CreateProductDto } from "../domain/dto/create-product.dto";
import { UpdateProductDto } from "../domain/dto/update-product.dto";
import { ProductEntity } from "../domain/entities/product";

export abstract class IProductsRepository {
    public abstract insert(product: CreateProductDto): Promise<void>;
    public abstract update(id: string, product: UpdateProductDto): Promise<void>;
    public abstract findByCategory(category: string): Promise<ProductEntity>;
    public abstract findAll(): Promise<ProductEntity[]>;
    public abstract delete(id: string): Promise<void>;
}