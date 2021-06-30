import { Injectable } from "@nestjs/common";
import { stripe } from "src/constants";

@Injectable()
export class ProductsService {
    async createProduct(name: string) {
        return await stripe.products.create({ name });
    }
}