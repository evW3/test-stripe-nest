import { Injectable } from "@nestjs/common";
import { stripe } from '../../constants';
import { CustomersDto } from "./dto/customers.dto";

@Injectable()
export class CustomersService {
    async createCustomer(customer: CustomersDto) {
        return await stripe.customers.create(customer);
    }
}