import {
  Column,
  Model,
  Table,
  HasMany,
  BeforeCreate,
} from 'sequelize-typescript';
import { CreditCard } from '../../credit-card/entities/credit-card.entity';
import { Address } from '../../address/entities/address.entity';
import { Order } from '../../order/entities/order.entity';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  emailAddress: string;

  @Column
  password: string;

  @Column
  lastLogin: string;

  @HasMany(() => CreditCard)
  creditCards: CreditCard[];
  @HasMany(() => Address)
  addresses: Address[];
  @HasMany(() => Order)
  orders: Order[];
}
