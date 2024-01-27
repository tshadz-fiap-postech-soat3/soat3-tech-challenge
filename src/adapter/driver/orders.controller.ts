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
import { OrderStatus } from '../../@core/order/entitites/order';
import { OrdersService } from '../../@core/order/orders.service';
import { CreateOrderDto } from '../../@core/order/entitites/create-order.dto';
import { UpdateOrderDto } from '../../@core/order/entitites/update-order.dto';

@ApiTags('order')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'create a new order' })
  async create(@Body() createOrderDto: CreateOrderDto) {
    return await this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'return all orders created' })
  async findAll() {
    return await this.ordersService.findAll();
  }

  @Get(':status')
  @ApiOperation({ summary: 'return all orders created by status' })
  async findAllByStatus(@Param('status') status: OrderStatus) {
    return await this.ordersService.findAllByStatus(status);
  }

  @Get(':id')
  @ApiOperation({ summary: 'return one order' })
  async findOne(@Param('id') id: string) {
    return await this.ordersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update the data' })
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return await this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete the order' })
  async remove(@Param('id') id: string) {
    return await this.ordersService.remove(id);
  }
}
