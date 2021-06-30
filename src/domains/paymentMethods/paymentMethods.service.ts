import { Injectable } from "@nestjs/common";
import { PaymentMethodDto } from "./dto/paymentMethod.dto";
import { stripe } from "src/constants";

@Injectable() 
export class PaymentMethodsService {
    async createPaymentMethod(paymentMethod: PaymentMethodDto) {
        return await stripe.paymentMethods.create({
            type: 'card',
            card: {
                ...paymentMethod
            }
        });
    }
}