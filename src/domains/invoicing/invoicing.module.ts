import { Module } from "@nestjs/common";
import { InvoicingController } from "./invoicing.controller";
import { InvoicingService } from "./invoicing.service";

@Module({
    imports:[],
    providers: [InvoicingService],
    controllers: [InvoicingController]
})
export class InvoicingModule {}