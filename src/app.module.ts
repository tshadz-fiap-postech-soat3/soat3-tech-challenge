import { Module, NestModule } from '@nestjs/common';
import { CustomersModule } from './modules/customers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { DatabaseModule } from './adapter/driven/infra/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './modules/categories.module';

@Module({
  imports: [CustomersModule, CategoriesModule, ProductsModule, OrdersModule, DatabaseModule, ConfigModule.forRoot()],
})
export class AppModule {}
