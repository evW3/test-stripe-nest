import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PricesDto } from "./dto/prices.dto";
import { stripe } from "src/constants";

@Injectable()
export class PricesService {
    async createPrice(price: PricesDto) {
        try {
            return await stripe.prices.create(price);
        } catch(e) {
            throw new HttpException(`${ e.message }`, HttpStatus.BAD_REQUEST);
        }
    }
}