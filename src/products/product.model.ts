import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  helper: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  constructor(
    id: string,
    title: string,
    helper: string,
    description: string,
    price: number,
  ) {
    this.id = id;
    this.title = title;
    this.helper = helper;
    this.description = description;
    this.price = price;
  }
}
