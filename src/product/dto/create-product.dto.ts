import {IsAlpha, IsNumber, IsString} from "class-validator";

export class CreateProductDto {

    @IsString()
    name: string;

    @IsString()
    serialNumber: string;

    @IsNumber()
    price: number;
}
