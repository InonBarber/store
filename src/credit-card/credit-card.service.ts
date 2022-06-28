import {Injectable} from '@nestjs/common';
import {CreateCreditCardDto} from './dto/create-credit-card.dto';
import {UpdateCreditCardDto} from './dto/update-credit-card.dto';
import {InjectModel} from "@nestjs/sequelize";
import {CreditCard} from "./credit-card.model";
import {UpdateOrderDto} from "../order/dto/update-order.dto";

@Injectable()
export class CreditCardService {
    constructor(@InjectModel((CreditCard)) private creditCard: typeof CreditCard) {
    }

    create(createCreditCardDto: CreateCreditCardDto) {
        return this.creditCard.create({ ...createCreditCardDto });
    }

    findAll(): Promise<CreditCard[]> {
        return this.creditCard.findAll();
    }

    findOne(id: number): Promise<CreditCard> {
        return this.creditCard.findOne({
            where: {
                id,
            },
        });
    }

    update(id: number, updateCreditCardDto: UpdateCreditCardDto) {
        this.creditCard.upsert({})
        return this.creditCard.update(
            {...UpdateCreditCardDto},
            {
                where:
                    {userID: updateCreditCardDto.userID}
            },
        );
    }

    async remove(id: number) {
        const creditCard = await this.findOne(id);
        await creditCard.destroy();
    }
}
