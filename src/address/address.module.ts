import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Address} from "./address.model";

@Module({
  imports: [SequelizeModule.forFeature([Address])],
  controllers: [AddressController],
  providers: [AddressService],
  exports: [SequelizeModule],
})
export class AddressModule {}
