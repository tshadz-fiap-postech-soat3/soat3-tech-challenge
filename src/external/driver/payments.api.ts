import { Controller, Patch, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaymentsService } from '../driven/payment/payments.service';

@ApiTags('payment')
@Controller('payments')
export class PaymentsApi {
  constructor(
    private readonly paymentsService: PaymentsService,
  ) {}

  @Patch(':id')
  @ApiOperation({ summary: 'make a payment' })
  update(@Param('id') id: string) {
    return this.paymentsService.update(id);
  }
}
