import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({ description: 'teste' })
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  constructor(id: string, title: string, description: string, price: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}
