import { IsNotEmpty, Min } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  @Min(0)
  readonly price: number;
}
