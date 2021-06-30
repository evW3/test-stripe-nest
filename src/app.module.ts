import { Module } from '@nestjs/common';
import { CustomersModule } from './domains/customers/customers.module';
import { InvoicingModule } from './domains/invoicing/invoicing.module';
import { PaymentModule } from './domains/payment/payment.module';
import { PaymentMethodsModule } from './domains/paymentMethods/paymentMethods.module';
import { PricesModule } from './domains/prices/prices.module';
import { ProductsModule } from './domains/products/products.module';

@Module({
  imports: [
    PaymentModule,
    ProductsModule,
    PaymentModule,
    PricesModule,
    PaymentMethodsModule,
    CustomersModule,
    InvoicingModule
  ],
})
export class AppModule {}
