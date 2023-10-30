import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductsService } from '../../@core/application/services/products.service';
import { CreateProductDto } from '../../@core/domain/dto/create-product.dto';
import { UpdateProductDto } from '../../@core/domain/dto/update-product.dto';

@ApiTags('product')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({summary: "create a new prduct"})
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({summary: "return all products created"})
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':category')
  @ApiOperation({summary: "return all products in a specific category"})
  findOne(@Param('category') category: string) {
    return this.productsService.findOne(category);
  }

  @Patch(':id')
  @ApiOperation({summary: "update the data"})
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({summary: "delete the product"})
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
