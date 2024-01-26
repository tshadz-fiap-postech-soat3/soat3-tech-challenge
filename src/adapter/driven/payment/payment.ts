import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from '../../../@core/domain/dto/update-product.dto';
import { IPayment } from '../../../@core/ports/ipayment';

@Injectable()
export class PaymentMercadoPago implements IPayment {
  update(id: string, product: UpdateProductDto): boolean {
    return true;
  }
}
