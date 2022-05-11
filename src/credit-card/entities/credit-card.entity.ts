import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../users/user.model';
import { Payment } from '../../payment/entities/payment.entity';

@Table
export class CreditCard extends Model {
  @Column
  creditCardNumber: string;

  @Column
  validity: Date;

  @Column
  cvv: number;

  @BelongsTo(() => User)
  user: User;

  @Column
  @ForeignKey(() => User)
  userID: number;

  @HasMany(() => Payment)
  payments: Payment[];
}
