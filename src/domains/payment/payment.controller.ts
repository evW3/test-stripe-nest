import { Body, Controller, Post } from "@nestjs/common";
import { PaymentService } from "./payment.service";

@Controller('/payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @Post('/create-intent')
    async createPaymentIntent(@Body() req: any) {
        const clientSecret = await this.paymentService.createPaymentIntent(req);
        return { clientSecret };
    }
}