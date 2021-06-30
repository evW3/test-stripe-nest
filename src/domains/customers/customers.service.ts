import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { stripe } from '../../constants';
import { CustomersDto } from "./dto/customers.dto";

@Injectable()
export class CustomersService {
    async createCustomer(customer: CustomersDto) {
        try {
            return await stripe.customers.create(customer);
        } catch(e) {
            throw new HttpException(`${ e.message }`, HttpStatus.BAD_REQUEST);
        }
    }
}