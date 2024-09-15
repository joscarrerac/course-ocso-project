import { IsString,  MaxLength } from "class-validator";

export class CreateEmployeeDto {
    
    @IsString()
    @MaxLength(50)
    name: string;
    @IsString()
    @MaxLength(70)
    lastName: string;
    @IsString()
    @MaxLength(10)
    phoneNumber: string;
    @IsString()
    @MaxLength(50)
    email: string;
}
