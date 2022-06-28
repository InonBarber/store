import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {InjectModel} from "@nestjs/sequelize";
import {Order} from "./order.model";
import {UpdatePaymentDto} from "../payment/dto/update-payment.dto";

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private order: typeof Order) {
  }
  async  create (createOrderDto: CreateOrderDto) {
    return this.order.create({...createOrderDto });
  }

  findAll(): Promise<Order[]> {
    return this.order.findAll();
  }

  findOne(id: number): Promise<Order> {
    return this.order.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    this.order.upsert({})
    return this.order.update(
        { ...UpdateOrderDto },
        { where: {userID : updateOrderDto.userID} },
    );
  }

  async remove(id: number):  Promise<void> {
    const order = await this.findOne(id);
    await order.destroy();
  }
}
