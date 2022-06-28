import { Column } from 'sequelize-typescript';
import { IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsString()
  orderNumber: string;

  @IsNumber()
  userID: number;

  @IsNumber()
  creditCardID: number;

  @IsNumber()
  orderID: number;
}
