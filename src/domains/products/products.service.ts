import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { stripe } from "src/constants";

@Injectable()
export class ProductsService {
    async createProduct(name: string) {
        try {
            return await stripe.products.create({ name });
        } catch(e) {
            throw new HttpException(`${ e.message }`, HttpStatus.BAD_REQUEST);
        }
    }
}