import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { stripe } from "src/constants";

@Injectable()
export class ProductsService {
    async createProduct(name: string) {
        try {
            return await stripe.products.create({ name });
        } catch {
            throw new HttpException('Server error!', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}