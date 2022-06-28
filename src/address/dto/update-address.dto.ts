import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressDto } from './create-address.dto';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  PostalCode: string;
  userId: number;
}
