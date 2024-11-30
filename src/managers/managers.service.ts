import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Manager } from './entities/manager.entity';
import { Repository } from 'typeorm'; 

@Injectable()
export class ManagersService {
  constructor(
    @InjectRepository(Manager)
    private managersRepository: Repository<Manager>
  ) {}
  create(createManagerDto: CreateManagerDto) {
    return this.managersRepository.save(createManagerDto);
  }

  findAll() {
    return this.managersRepository.find();
  }

  findOne(id: string) {
    const manager = this.managersRepository.findOneBy({ managerId: id })
    if (!manager) throw new NotFoundException()
    return manager
  }

  async update(id: string, updateManagerDto: UpdateManagerDto) {
    const manager = await this.managersRepository.preload({managerId: id, ...updateManagerDto});
    if (!manager) throw new NotFoundException()
    return this.managersRepository.save(manager);
  }

  remove(id: string) {
    return `This action removes a #${id} manager`;
  }
}
