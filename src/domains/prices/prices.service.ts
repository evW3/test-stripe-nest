import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PricesDto } from "./dto/prices.dto";
import { stripe } from "src/constants";

@Injectable()
export class PricesService {
    async createPrice(price: PricesDto) {
        try {
            return await stripe.prices.create(price);
        } catch(e) {
            throw new HttpException('Server error!', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}