
import { IsOptional, IsUUID, IsString, MaxLength, IsNumber, IsInt } from "class-validator";
import { Product } from "../entities/product.entity";
import { Provider } from "../../providers/entities/provider.entity";

export class CreateProductDto extends Product {

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
    @IsOptional()
    provider: Provider;

}
