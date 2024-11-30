import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from './entities/region.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Region)
    private regionsRepository: Repository<Region>
  ) {}
  create(createRegionDto: CreateRegionDto) {
    return this.regionsRepository.save(createRegionDto);
  }

  findAll() {
    return this.regionsRepository.find();
  }

  findOne(id: number) {
    const region = this.regionsRepository.findOneBy({ regionId: id })
    if (!region) throw new NotFoundException()
    return region
  }

 async update(id: number, updateRegionDto: UpdateRegionDto) {
    const region = await this.regionsRepository.preload({
      regionId: id,
      ...updateRegionDto,
    })
    if (!region) throw new NotFoundException()
    return this.regionsRepository.save(region);
  }

  remove(id: number) {
    return this.regionsRepository.delete({ regionId: id });
  }
}
