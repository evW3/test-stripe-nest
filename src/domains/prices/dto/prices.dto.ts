 
import { IsNumber, IsString } from 'class-validator';

export class PricesDto {
    @IsString()
    product: string;

    @IsNumber()
    unit_amount: number;

    @IsString()
    currency: string;
}