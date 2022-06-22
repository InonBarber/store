import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import {InjectModel} from "@nestjs/sequelize";
import {Address} from "./address.model";
import {UpdateCreditCardDto} from "../credit-card/dto/update-credit-card.dto";

@Injectable()
export class AddressService {
  constructor(@InjectModel(Address) private address: typeof Address) {
  }
  async create(createAddressDto: CreateAddressDto) {
    return this.address.create({...createAddressDto});
  }

  findAll(): Promise<Address[]> {
    return this.address.findAll();
  }

  findOne(id: number): Promise<Address> {
    return this.address.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    this.address.upsert({})
    return this.address.update(
        { ...UpdateAddressDto },
        { where:
              {PostalCode : updateAddressDto.PostalCode} },
    );
  }

  async remove(id: number) {
    const address = await this.findOne(id);
    await address.destroy();
  }
}
