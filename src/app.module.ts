import { Module, NestModule } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { DatabaseModule } from './adapter/driven/infra/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [CustomersModule, CategoriesModule, ProductsModule, OrdersModule, DatabaseModule, ConfigModule.forRoot()],
})
export class AppModule {}
