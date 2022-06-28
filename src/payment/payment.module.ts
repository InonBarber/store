import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Payment} from "./payment.model";

@Module({
  imports: [SequelizeModule.forFeature([Payment])],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [SequelizeModule],
})
export class PaymentModule {}
