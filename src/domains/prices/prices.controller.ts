import { Body, Controller, Post } from "@nestjs/common";
import { PricesDto } from "./dto/prices.dto";
import { PricesService } from "./prices.service";

@Controller('/prices')
export class PricesController {
    constructor(private readonly priceService: PricesService) {}

    @Post('/')
    async createPrice(@Body() priceDto: PricesDto) {
        return await this.priceService.createPrice(priceDto);
    }
}