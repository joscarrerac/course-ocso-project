import { IsArray, IsString, MaxLength } from "class-validator";
import { Region } from "../entities/region.entity";

export class CreateRegionDto extends Region {
    @IsString()
    @MaxLength(50)
    regionName: string;
    @IsArray()
    regionStates: string[];
}
