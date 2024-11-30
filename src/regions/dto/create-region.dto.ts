import { Region } from "../entities/region.entity";

export class CreateRegionDto extends Region {
    regionId: number;
    regionName: string;
    regionStates: string[];
}
