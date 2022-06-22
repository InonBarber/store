import {
    Column,
    Model,
    Table,
    BelongsTo,
    ForeignKey,
} from 'sequelize-typescript';
import {Order} from "../order/order.model";
import {CreditCard} from "../credit-card/credit-card.model";

@Table
export class Payment extends Model {
    @Column
    orderNumber: string;

    @Column
    userID: string;

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
