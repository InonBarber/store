import { Column } from "sequelize-typescript";

export class CreateCreditCardDto {
  creditCardNumber: string;
  validity: Date;
  cvv: number;
  userID: number;
}
