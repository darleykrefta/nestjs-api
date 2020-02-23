import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ): any {
    const generatedId = this.productsService.insertProduct(
      title,
      description,
      price,
    );
    return { id: generatedId };
  }

  @Get()
  getAllProducts(): any {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string): any {
    return this.productsService.getProductById(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ): any {
    this.productsService.updateProduct(id, title, description, price);
  }

  @Delete()
  deleteProduct(@Param('id') id: string): any {
    this.productsService.deleteProdut(id);
  }
}
