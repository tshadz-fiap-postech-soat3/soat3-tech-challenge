import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomersService } from '../../@core/application/services/customers.service';
import { CreateCustomerDto } from '../../@core/domain/dto/create-customer.dto';
import { UpdateCustomerDto } from '../../@core/domain/dto/update-customer.dto';

@ApiTags('customer')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiOperation({summary: "create a new customer"})
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return await this.customersService.create(createCustomerDto);
  }

  @Get()
  @ApiOperation({summary: "return all customers created"})
  async findAll() {
    return await this.customersService.findAll();
  }

  @Get(':cpf')
  @ApiOperation({summary: "return customer data by cpf"})
  async findOne(@Param('cpf') cpf: string) {
    return await this.customersService.findOne(cpf);
  }

  @Patch(':id')
  @ApiOperation({summary: "update the data"})
  async update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return await this.customersService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  @ApiOperation({summary: "delete the customer"})
  async remove(@Param('id') id: string) {
    return await this.customersService.remove(id);
  }
}
