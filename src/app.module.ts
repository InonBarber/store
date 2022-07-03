import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { CreditCardModule } from './credit-card/credit-card.module';
import { AddressModule } from './address/address.module';
import { Product } from './product/product.model';
import { Payment } from './payment/payment.model';
import { Order, OrderProduct } from './order/order.model';
import { CreditCard } from './credit-card/credit-card.model';
import { Address } from './address/address.model';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { ProductImage } from './product/product-image.model';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      define: {
        charset: 'utf8',
      },
      models: [
        User,
        CreditCard,
        Address,
        Order,
        Product,
        Payment,
        OrderProduct,
        ProductImage,
      ],
      autoLoadModels: true,
      synchronize: true,
      // sync: {
      //   alter: true,
      // },
    }),
    UsersModule,
    OrderModule,
    PaymentModule,
    CreditCardModule,
    AddressModule,
    ProductModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
