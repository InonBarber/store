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
import { CreditCard } from './credit-card/entities/credit-card.entity';
import { Address } from './address/entities/address.entity';
import { Order, OrderProduct } from './order/entities/order.entity';
import { Payment } from './payment/entities/payment.entity';
import { Product } from './product/product.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      models: [
        User,
        CreditCard,
        Address,
        Order,
        Product,
        Payment,
        OrderProduct,
      ],
      autoLoadModels: true,
      synchronize: true,
      sync: {
        force: true,
      },
    }),
    UsersModule,
    OrderModule,
    PaymentModule,
    CreditCardModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
