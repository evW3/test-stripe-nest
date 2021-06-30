import { IsObject, IsString } from 'class-validator';

export class InvoiceDto {
    @IsString()
    customer: string;

    @IsString()
    price: string;
}