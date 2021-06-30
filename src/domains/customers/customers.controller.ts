import { Body, Controller, Post } from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { CustomersDto } from "./dto/customers.dto";

@Controller('/customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Post('/')
    async createCustomer(@Body() customersDto: CustomersDto) {
        return await this.customersService.createCustomer(customersDto);
    }
}