import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  NotEmpty,
  NotNull,
  Table,
} from 'sequelize-typescript';
import { Product } from './product.model';
import { User } from '../users/user.model';

@Table
export class ProductImage extends Model {
  @Column
  url: string;

  @Column
  fileName: string;

  @Column
  extension: string;

  @Column
  absolutePath: string;

  @Column
  size: string;

  @Column
  imageIndex: number;

  @BelongsTo(() => Product)
  product: Product;

  @Column
  @ForeignKey(() => Product)
  productID: number;
}
