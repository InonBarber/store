import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import {InjectModel} from "@nestjs/sequelize";
import {Payment} from "./payment.model";

@Injectable()
export class PaymentService {

  constructor(@InjectModel(Payment) private payment: typeof Payment) {}

  async create(createPaymentDto: CreatePaymentDto) {
    return this.payment.create({...createPaymentDto });
  }

  findAll(): Promise<Payment[]> {
    return this.payment.findAll();
  }

  findOne(id: number): Promise<Payment>  {
    return this.payment.findOne({
      where: {
        id,
      },
    });
  }


  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    this.payment.upsert({})
    return this.payment.update(
        { ...UpdatePaymentDto },
        { where: { creditCardID: updatePaymentDto.creditCardID } },
    );
  }

  async remove(id: number): Promise<void> {
    const payment = await this.findOne(id);
    await payment.destroy();
  }
}
