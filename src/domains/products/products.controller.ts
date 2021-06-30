import { Body, Controller, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('/products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Post('/')
    async createProduct(@Body('name') name: string) {
        return this.productService.createProduct(name);
    }
}