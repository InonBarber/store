import {
  Column,
  Model,
  Table,
  HasMany,
  HasOne,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { CreditCard } from '../../credit-card/entities/credit-card.entity';
import { Order } from '../../order/entities/order.entity';

@Table
export class Payment extends Model {
  @Column
  orderNumber: string;

  @Column
  userNumber: string;

  @BelongsTo(() => CreditCard)
  creditCard: CreditCard;

  @Column
  @ForeignKey(() => CreditCard)
  creditCardID: number;

  @BelongsTo(() => Order)
  order: Order;

  @Column
  @ForeignKey(() => Order)
  orderID: number;
}
