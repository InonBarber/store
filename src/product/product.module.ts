import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product.model';

@Module({
  imports: [SequelizeModule.forFeature([Product]), ProductModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [SequelizeModule],
})
export class ProductModule {}
