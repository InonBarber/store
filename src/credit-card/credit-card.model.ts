import {
    BelongsTo,
    Column,
    ForeignKey,
    HasMany,
    HasOne,
    Model,
    Table,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import {Payment} from "../payment/payment.model";

@Table
export class CreditCard extends Model {
    @Column
    creditCardNumber: string;

    @Column
    validity: string;

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
