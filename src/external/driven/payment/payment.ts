import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentMercadoPago {
  update(id: string): boolean {
    return true;
  }
}
