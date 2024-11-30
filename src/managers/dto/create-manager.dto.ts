import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";
import { Manager } from "../entities/manager.entity";

export class CreateManagerDto extends  Manager{
    @IsString() 
    @MaxLength(100)
    managerFullName: string;
    @IsNumber() 
    salary: number;
    @IsString()
    @IsEmail() 
    managerEmail: string;
    @IsString() 
    @MaxLength(16)
    managerPhoneNumber: string; 
}
