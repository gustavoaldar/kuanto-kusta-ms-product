import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from './dtos/product.dto';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly Product: Model<Product>,
  ) {}

  async get(): Promise<Product[]> {
    return await this.Product.find();
  }

  async show(_id: string): Promise<Product> {
    try {
      return await this.Product.findOne({ _id });
    } catch (error) {
      throw new Error('Product not found');
    }
  }

  async create(productDto: ProductDto): Promise<Product> {
    const { name, price } = productDto;
    return await this.Product.create({ name, price });
  }

  async update(_id: string, productDto: ProductDto): Promise<Product> {
    const { name, price } = productDto;
    return await this.Product.findOneAndUpdate(
      { _id },
      { name, price },
      { new: true },
    );
  }

  async delete(_id: string): Promise<void> {
    await this.Product.findOneAndDelete({ _id });
  }
}
