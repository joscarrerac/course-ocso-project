import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { v4 as uuid } from "uuid";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  private products: CreateProductDto[] = [
    {
      productId: uuid(),
      productName: "Sabritas Normal 48g",
      price: 1000,
      countSealed: 10,
      provider: uuid(),
    },
    {
      productId: uuid(),
      productName: "Coca Cola 600ml",
      price: 40,
      countSealed: 2,
      provider: uuid(),
    },
    {
      productId: uuid(),
      productName: "Pepsi 600ml",
      price: 40,
      countSealed: 2,
      provider: uuid(),
    },
  ];

  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.save(createProductDto);
    return product;
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    const product = this.productRepository.findOneBy({ productId: id });
    if (!product) throw new NotFoundException("Product not found");
    return product;
  }

  findByProvider(id: string) {
    const productsFound = this.products.filter(
      (product) => product.provider === id
    );
    if (productsFound.length == 0)
      throw new NotFoundException("Product not found");
    return productsFound;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const productToUpdate = await this.productRepository.preload({
      productId: id,
      ...updateProductDto,
    });
    if (!productToUpdate) throw new NotFoundException("Product not found");
    this.productRepository.save(productToUpdate);
    return productToUpdate;
  }

  remove(id: string) {
    this.findOne(id);
    this.productRepository.delete({ productId: id });
    return { message: `Product with id ${id} has been deleted` };
  }
}
