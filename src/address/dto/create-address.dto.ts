import {IsNumber, IsString} from "class-validator";

export class CreateAddressDto {
  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsString()
  street: string;

  @IsNumber()
  houseNumber: number;

  @IsString()
  PostalCode: string;

  @IsNumber()
  userId: number;
}
