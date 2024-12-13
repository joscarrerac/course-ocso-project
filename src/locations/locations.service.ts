import { Injectable,NotFoundException } from "@nestjs/common";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { Location } from "./entities/location.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class LocationsService {
  
  constructor(
    @InjectRepository(Location)
    private locationsRepository: Repository<Location>) {}
  create(createLocationDto: CreateLocationDto) {
    return this.locationsRepository.save(createLocationDto);
  }

  findAll() {
    return this.locationsRepository.find();
  }

  findOne(id: number) {
    const location = this.locationsRepository.findOneBy({ locationId: id })
    if (!location) throw new NotFoundException()
    return location
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    const location = await this.locationsRepository.preload({
      locationId: id,
      ...updateLocationDto,
    })
    return this.locationsRepository.save(location);
  }

  remove(id: number) {
    return this.locationsRepository.delete({ locationId: id });
  }
}
