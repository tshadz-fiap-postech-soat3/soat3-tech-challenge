import { UpdateProductDto } from '../../../@core/products/entities/update-product.dto';

export abstract class IPayment {
  public abstract update(id: string, product: UpdateProductDto): boolean;
}
