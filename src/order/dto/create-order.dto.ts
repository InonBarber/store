import {IsDate, IsNumber} from "class-validator";

export class CreateOrderDto {
  @IsDate()
  date: Date;

  @IsNumber()
  price: number;

  @IsNumber()
  userID: number;
}
