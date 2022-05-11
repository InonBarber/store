import { PartialType } from '@nestjs/mapped-types';
import { CreateCreditCardDto } from './create-credit-card.dto';

export class UpdateCreditCardDto extends PartialType(CreateCreditCardDto) {
  creditCardNumber: string;
  validity: Date;
  cvv: number;
  userID: number;
}
