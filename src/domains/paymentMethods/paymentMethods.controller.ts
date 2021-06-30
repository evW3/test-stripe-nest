import { Body, Controller, Post } from "@nestjs/common";
import { PaymentMethodDto } from "./dto/paymentMethod.dto";
import { PaymentMethodsService } from "./paymentMethods.service";

@Controller('/payment-methods')
export class PaymentMethodsController {
    constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

    @Post('/') 
    async createPaymentMethod(@Body() paymentMethod: PaymentMethodDto) {
        return await this.paymentMethodsService.createPaymentMethod(paymentMethod);
    }
}