import {
  Column,
  Model,
  Table,
  HasMany,
  HasOne,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from 'sequelize-typescript';
import { User } from '../../users/user.model';
import { Payment } from '../../payment/entities/payment.entity';
import { Product } from '../../product/product.model';

@Table({ paranoid: true, timestamps: true })
export class Order extends Model {
  @Column
  date: Date;

  @BelongsToMany(() => Product, () => OrderProduct)
  products: number;

  @Column({ allowNull: false })
  price: number;

  @BelongsTo(() => User)
  user: User;

  @Column({ allowNull: false })
  @ForeignKey(() => User)
  userID: number;

  @HasOne(() => Payment)
  payment: Payment;
}

@Table
export class OrderProduct extends Model {
  @ForeignKey(() => Order)
  @Column
  orderID: number;

  @ForeignKey(() => Product)
  @Column
  productID: number;
}
