import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderItemsService } from '../../@core/application/services/order-items.service';
import { CreateOrderItemDto } from '../../@core/domain/dto/create-order-item.dto';
import { UpdateOrderItemDto } from '../../@core/domain/dto/update-order-item.dto';

@ApiTags('order-item')
@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  @ApiOperation({ summary: 'add itens to an order' })
  create(@Body() createOrderItemDto: CreateOrderItemDto[]) {
    console.log(createOrderItemDto);
    return this.orderItemsService.create(createOrderItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'return all order items created' })
  findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'return one order item' })
  findOne(@Param('id') id: string) {
    return this.orderItemsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update the data' })
  update(
    @Param('id') id: string,
    @Body() updateOrderItemDto: UpdateOrderItemDto,
  ) {
    return this.orderItemsService.update(id, updateOrderItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete the order item' })
  remove(@Param('id') id: string) {
    return this.orderItemsService.remove(id);
  }
}
