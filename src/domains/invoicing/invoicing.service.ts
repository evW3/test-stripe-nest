import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InvoiceDto } from "./dto/invoice.dto";
import { stripe } from "src/constants";

@Injectable()
export class InvoicingService {
    async createInvoice(invoiceDto: InvoiceDto) {
        try {
            const invoiceItem = await stripe.invoiceItems.create(invoiceDto);
            const invoice = await stripe.invoices.create({
                customer: invoiceDto.customer,
                collection_method: 'send_invoice',
                days_until_due: 30,
            })
            await stripe.invoices.sendInvoice(invoice.id);
            return invoice;
        } catch(e) {
            throw new HttpException(`${ e.message }`, HttpStatus.BAD_REQUEST);
        }
    }
}