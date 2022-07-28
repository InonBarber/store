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
import * as XLSX from 'xlsx';
import { readFile } from 'xlsx';
import { InjectRepository } from '@nestjs/typeorm';
import { unique } from 'sequelize-typescript/dist/shared/array';

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
    return this.product.findAll({ include: [ProductImage] });
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

  async saveExFile(exFile) {
    const fileName = exFile;
    const workbook = XLSX.readFile(
      __dirname +
        '/../../public/media/excel/00bf1bef-746a-47ad-b295-6be59b8a93e8.xlsx',
      {
        type: 'binary',
      },
    );
    let sheetName = workbook.SheetNames[0];
    let sheet = workbook.Sheets[sheetName];
    let jsonSheet = XLSX.utils.sheet_to_json(sheet, {
      defval: null,
      blankrows: true,
    });
    let parsed = this.parseXlFile(jsonSheet);
    for (let pr of parsed) {
      await this.product.upsert(pr);
    }
    // console.log(jsonSheet);
    // return jsonSheet;
  }

  parseXlFile(json: any[]) {
    return json.map((product) => {
      let keys = Object.keys(product).map((k) => k.toLowerCase());
      product.total = product.vat ? product.price * 1.17 : product.price;
      for (let key in product) {
        let k = key.toLowerCase().split(' ').join('').split('_').join('');
        if (k == 'unittype') {
          product.unitType = product[key];
          delete product[key];
        }
      }
      let p = { ...product, serialNumber: product.serialNumber };
      delete p.serialNumber;
      return p;
    });
  }
}

// joe npm
