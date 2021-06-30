import { IsNumber, IsString } from 'class-validator';

export class PaymentMethodDto {
    @IsString()
    number: string;

    @IsNumber()
    exp_month: number;

    @IsNumber()
    exp_year: number;

    @IsString()
    cvc: string;
}