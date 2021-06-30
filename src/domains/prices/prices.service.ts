import { Injectable } from "@nestjs/common";
import { PricesDto } from "./dto/prices.dto";
import { stripe } from "src/constants";

@Injectable()
export class PricesService {
    async createPrice(price: PricesDto) {
        return await stripe.prices.create(price);
    }
}