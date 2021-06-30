import { Module } from "@nestjs/common";
import { PricesController } from "./prices.controller";
import { PricesService } from "./prices.service";

@Module({
    imports: [],
    providers: [PricesService],
    controllers: [PricesController]
})
export class PricesModule {}