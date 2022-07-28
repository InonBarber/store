import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { Express } from 'express';

export const storage = (dir = '../../../public/media/images') => {
  console.log(__dirname + dir);
  return {
    storage: diskStorage({
      destination: __dirname + dir,
      filename: (req, file, cb) => {
        const filename: string = uuidv4();
        const extension: string = path.parse(file.originalname).ext;

        cb(null, `${filename}${extension}`);
      },
    }),
  };
};

// @UseGuards()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(
      { id: +id },
      {
        attributes: ['url', 'id', 'imageIndex'],
        where: { size: 'original' },
        required: false,
      },
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  @Post('upload-image')
  @UseInterceptors(FileInterceptor('file', storage()))
  async uploadFile(@UploadedFile() file, @Body() data: any) {
    return this.productService.saveImage([file], data.productID);
  }

  @Post('upload-excel')
  @UseInterceptors(
    FileInterceptor('file', storage('/../../public/media/excel')),
  )
  uploadExFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return this.productService.saveExFile(file);
  }
}
