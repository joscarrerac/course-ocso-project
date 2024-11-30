import { Injectable,NotFoundException } from "@nestjs/common";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { Location } from "./entities/location.entity";
import { Repository } from "typeorm";

@Injectable()
export class LocationsService {
  constructor(private locationsRepository: Repository<Location>) {}
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

  update(id: number, updateLocationDto: UpdateLocationDto) {
    const location = this.locationsRepository.preload({
      locationId: id,
      ...updateLocationDto,
    })
    return location
  }

  remove(id: number) {
    return this.locationsRepository.delete({ locationId: id });
  }
}
