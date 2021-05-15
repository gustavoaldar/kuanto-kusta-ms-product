import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductDto } from './dtos/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async get() {
    return await this.productService.get();
  }
  @Get(':id')
  async show(@Param('id') _id: string) {
    return await this.productService.show(_id);
  }
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() productDto: ProductDto) {
    return await this.productService.create(productDto);
  }
  @Put(':id')
  @UsePipes(ValidationPipe)
  async update(@Param('id') _id: string, @Body() productDto: ProductDto) {
    return await this.productService.update(_id, productDto);
  }
  @Delete(':id')
  async remove(@Param('id') _id: string) {
    return await this.productService.delete(_id);
  }
}
