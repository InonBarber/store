import {
  BelongsTo,
  Column,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../users/user.model';

@Table
export class Address extends Model {
  @Column
  country: string;

  @Column
  city: string;

  @Column
  street: string;

  @Column
  houseNumber: number;

  @Column
  PostalCode: string;

  @BelongsTo(() => User)
  user: User;

  @Column
  @ForeignKey(() => User)
  userId: number;
}
