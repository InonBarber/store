import {
  Column,
  Model,
  Table,
  HasMany,
  BelongsTo,
  BelongsToMany,
  IsAlpha,
  Unique,
} from 'sequelize-typescript';
import { Order, OrderProduct } from '../order/order.model';
import { ProductImage } from './product-image.model';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@Table
export class Product extends Model {
  @Column
  name: string;

  @Unique
  @Column
  serialNumber: string;

  @Column
  price: number;

  @BelongsToMany(() => Order, () => OrderProduct)
  orders: Order[];

  @HasMany(() => ProductImage)
  images: ProductImage[];

  @Column
  primaryImage: number;

  @Column
  description: string;

  @Column
  unitType: string;

  @Column
  vat: boolean;

  @Column
  total: number;
}
