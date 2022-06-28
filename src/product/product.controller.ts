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
import { Observable, of } from 'rxjs';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
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
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  // @Post('upload')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: '/uploads/productimages',
  //       filename: (req, file, cb) => {
  //         const filename: string =
  //           path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
  //         const extension: string = path.parse(file.originalname).ext;
  //
  //         cb(null, `${filename}${extension}`);
  //       },
  //     }),
  //   }),
  // )
  // uploadFile(@UploadedFile() file): Observable<object> {
  //   console.log(file);
  //   return of({ imagePath: file.filename });
  // }
  //
  // @Post('upload')
  // @UseInterceptors(AnyFilesInterceptor())
  //
  // uploadFile(@UploadedFiles() files: Observable<object>) {
  //   console.log(files);
  //   return of({ imagePath: files });
  // }
}
