import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private product: typeof Product) {}

  async create(createProductDto: CreateProductDto) {
    return this.product.create({ ...createProductDto });
  }

  findAll(): Promise<Product[]> {
    return this.product.findAll();
  }

  findOne(id: number): Promise<Product> {
    return this.product.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateProductDto : UpdateProductDto) {
    this.product.upsert({})
    return this.product.update(
        { ...UpdateProductDto },
        { where: { serialNumber: updateProductDto.serialNumber } },
    );
  }

  async remove(id: number): Promise<void> {
    const product = await this.findOne(id);
    await product.destroy();
  }
}
