import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PaymentMethodDto } from "./dto/paymentMethod.dto";
import { stripe } from "src/constants";

@Injectable() 
export class PaymentMethodsService {
    async createPaymentMethod(paymentMethod: PaymentMethodDto) {
        try {
            return await stripe.paymentMethods.create({
                type: 'card',
                card: {
                    ...paymentMethod
                }
            });
        } catch(e) {
            throw new HttpException('Server error!', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}