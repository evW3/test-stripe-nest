import { Module } from "@nestjs/common";
import { CustomersController } from "./customers.controller";
import { CustomersService } from "./customers.service";

@Module({
    imports: [],
    providers: [CustomersService],
    controllers: [CustomersController]
})
export class CustomersModule {}