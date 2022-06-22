import { Column } from "sequelize-typescript";
import { IsNumber, IsString} from "class-validator";

export class CreateCreditCardDto {
  @IsNumber()
  creditCardNumber: number;

  @IsString()
  validity: string;

  @IsNumber()
  cvv: number;

 @IsNumber()
  userID: number;
}
