
import { IsOptional, IsUUID, IsString, MaxLength, IsNumber, IsInt } from "class-validator";

export class CreateProductDto {

    @IsUUID('4')
    @IsOptional()
    productId: string;

    @IsString()
    @MaxLength(40)
    productName: string;

    @IsNumber()
    price: number;
    
    @IsInt()    
    countSealed: number;

    @IsString()
    @IsUUID('4')
    provider: string;

}
