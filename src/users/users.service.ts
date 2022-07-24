import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Product } from '../product/product.model';
import { ProductImage } from '../product/product-image.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return this.userModel.create({ ...createUserDto });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.userModel.upsert({});
    return this.userModel.update(
      { ...updateUserDto },
      { where: { emailAddress: updateUserDto.emailAddress } },
    );
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(options: any = {}): Promise<User> {
    return this.userModel.findOne(options);
  }
  // findOne(options: any = {}): Promise<User> {
  //   return this.userModel.findOne({
  //     where: { id: options },
  //   });
  // }

  // findOne(options = {}): Promise<User> {
  //   return this.userModel.findOne({
  //     where: {
  //       ...options,
  //     },
  //   });
  // }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
