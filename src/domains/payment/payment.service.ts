import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { stripe } from '../../constants';

@Injectable()
export class PaymentService {
    async createPaymentIntent(req: any): Promise<string> {
        try {
            const response = await stripe.paymentIntents.create({
                amount: req.value,
                currency: "usd"
              });
            return response.client_secret
        } catch(e) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
    }
}