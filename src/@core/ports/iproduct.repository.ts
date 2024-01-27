import { CreateProductCommand } from '../application/command/products-command';
import { Result } from '../application/result/result';
import { UpdateProductDto } from '../domain/dto/update-product.dto';
import { ProductEntity } from '../domain/entities/product';

export abstract class IProductsRepository {
  public abstract insert(
    product: CreateProductCommand,
  ): Promise<Result<ProductEntity>>;
  public abstract update(id: string, product: UpdateProductDto): Promise<void>;
  public abstract findByCategory(category: string): Promise<ProductEntity>;
  public abstract findByName(name: string): Promise<ProductEntity>;
  public abstract findAll(): Promise<ProductEntity[]>;
  public abstract delete(id: string): Promise<void>;
}
