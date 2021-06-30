import { Injectable } from "@nestjs/common";
import { InvoiceDto } from "./dto/invoice.dto";
import { stripe } from "src/constants";

@Injectable()
export class InvoicingService {
    async createInvoice(invoiceDto: InvoiceDto) {
        return await stripe.invoiceItems.create(invoiceDto);
    }
    
}