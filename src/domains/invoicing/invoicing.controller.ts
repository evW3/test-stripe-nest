import { Body, Controller, Post } from "@nestjs/common";
import { InvoiceDto } from "./dto/invoice.dto";
import { InvoicingService } from "./invoicing.service";

@Controller('/invoicing')
export class InvoicingController {
    constructor(private readonly invoicingService: InvoicingService) {}

    @Post('/')
    async createInvoice(@Body() invoiceDto: InvoiceDto) {
        return await this.invoicingService.createInvoice(invoiceDto);
    }
}