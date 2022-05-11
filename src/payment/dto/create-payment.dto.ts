import { Column } from "sequelize-typescript";

export class CreatePaymentDto {
  orderNumber: string;
  userNumber: string;
  creditCardID: number;
  orderID: number;

}
