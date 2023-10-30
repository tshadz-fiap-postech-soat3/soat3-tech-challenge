import { CreateProductDto } from "../domain/dto/create-product.dto";
import { UpdateProductDto } from "../domain/dto/update-product.dto";
import { ProductEntity } from "../domain/entities/product";

export abstract class IPayment {
    public abstract update(id: string, product: UpdateProductDto): boolean;
}
