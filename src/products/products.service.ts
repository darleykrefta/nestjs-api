import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(
    title: string,
    helper: string,
    description: string,
    price: number,
  ) {
    const id = Math.random().toString(); // yes, but no

    const newProduct = new Product(id, title, helper, description, price);

    this.products.push(newProduct);
    return id;
  }

  getProducts() {
    return [...this.products];
  }

  getProductById(id: string) {
    const [product] = this.findProduct(id);
    return { ...product };
  }

  updateProduct(
    id: string,
    title: string,
    helper: string,
    description: string,
    price: number,
  ) {
    const [product, index] = this.findProduct(id);
    const productUpdated = { ...product };

    if (title) {
      productUpdated.title = title;
    }

    if (helper) {
      productUpdated.helper = helper;
    }

    if (description) {
      productUpdated.description = description;
    }

    if (price) {
      productUpdated.price = price;
    }

    this.products[index] = productUpdated;

    return { ...productUpdated };
  }

  deleteProdut(id: string): any {
    const [_, index] = this.findProduct(id);
    this.products.splice(index, 1);
    return 'Product deleted!';
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex(product => product.id == id);

    const product = this.products[productIndex];

    if (!product) {
      throw new NotFoundException('Could not find product.');
    }

    return [product, productIndex];
  }
}
