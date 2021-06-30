import { Module } from "@nestjs/common";
import { PaymentMethodsController } from "./paymentMethods.controller";
import { PaymentMethodsService } from "./paymentMethods.service";

@Module({
    imports: [],
    providers: [PaymentMethodsService],
    controllers: [PaymentMethodsController]
})
export class PaymentMethodsModule {}