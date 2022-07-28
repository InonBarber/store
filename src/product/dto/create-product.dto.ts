import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  serialNumber: string;

  @IsNumber()
  price: number;

  images: number[];

  @IsString()
  description: string;

  @IsString()
  unitType: string;

  @IsBoolean()
  vat: boolean;

  @IsNumber()
  total: number;
}
