import { Module } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { CreditCardController } from './credit-card.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {CreditCard} from "./credit-card.model";

@Module({
  imports: [SequelizeModule.forFeature([CreditCard])],
  controllers: [CreditCardController],
  providers: [CreditCardService],
  exports: [SequelizeModule],
})
export class CreditCardModule {}
