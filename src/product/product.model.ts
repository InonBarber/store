import {
  Column,
  Model,
  Table,
  HasMany,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { Order, OrderProduct } from '../order/entities/order.entity';

@Table
export class Product extends Model {
  @Column
  name: string;

  @Column
  serialNumber: string;

  @Column
  price: number;

  @BelongsToMany(() => Order, () => OrderProduct)
  orders: Order[];
}
