import {
  Column,
  Model,
  Table,
  HasMany,
  BeforeCreate,
} from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';
import { Order } from '../order/order.model';
import { CreditCard } from '../credit-card/credit-card.model';
import { Address } from '../address/address.model';
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

  @BeforeCreate
  static hashPassword(instance: User) {
    const hash = bcrypt.hashSync(instance.password, bcrypt.genSaltSync(10));
    instance.password = hash;
  }
}
