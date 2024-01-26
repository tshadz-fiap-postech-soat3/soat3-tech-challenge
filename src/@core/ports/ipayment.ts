import { UpdateProductDto } from '../domain/dto/update-product.dto';

export abstract class IPayment {
  public abstract update(id: string, product: UpdateProductDto): boolean;
}
