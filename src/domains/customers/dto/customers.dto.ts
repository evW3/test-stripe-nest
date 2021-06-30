 import { IsObject, IsString } from 'class-validator';

export class CustomersDto {
    @IsString()
    email: string;

    @IsString()
    payment_method: string;

    @IsObject()
    invoice_settings: {
        default_payment_method: string;
    }
}