import {
  Controller,
  Injectable,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { ProductImage } from './product-image.model';
import * as path from 'path';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private product: typeof Product,
    @InjectModel(ProductImage) private ProductImages: typeof ProductImage,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return this.product.create({ ...createProductDto });
  }

  findAll(): Promise<Product[]> {
    return this.product.findAll({include:[ProductImage]});
  }

  findOne(options = {}, imageOptions = {}): Promise<Product> {
    return this.product.findOne({
      where: {
        ...options,
      },
      include: [{ model: ProductImage, ...imageOptions }],
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    this.product.upsert({});
    return this.product.update(
      { ...UpdateProductDto },
      { where: { serialNumber: updateProductDto.serialNumber } },
    );
  }

  async remove(id: number): Promise<void> {
    const product = await this.findOne(id);
    await product.destroy();
  }

  async saveImage(files: any[], productID: number) {
    for (const [index, file] of files.entries()) {
      const ext = path.extname(file.originalname);
      const filename = file.filename;
      const image = {
        productID,
        url: `http://localhost:3000/media/images/${filename}`,
        absolutePath: file.path,
        size: 'original',
        fileName: filename,
        extension: ext,
      };
      const imageSave = await this.ProductImages.create(image);
      const product = await this.findOne({ id: productID });
      product.primaryImage = this.ProductImages[0];
      for (const [index, image] of product.images.entries()) {
        await this.ProductImages.update(
          { imageIndex: index },
          { where: { id: image.id } },
        );
      }
      return this.ProductImages.findOne({ where: { id: imageSave.id } });
    }
  }
}
