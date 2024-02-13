import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private schedulesRepo: Repository<Schedule>,
  ) {}

  async create(createScheduleDto: CreateScheduleDto) {
    const schedules = this.schedulesRepo.create(createScheduleDto);
    return await this.schedulesRepo.save(schedules);
  }

  async findAll() {
    return await this.schedulesRepo.find();
  }

  async findOne(id: string) {
    const schedule = await this.schedulesRepo.findOne({ where: { id } });
    if (!schedule) {
      throw new NotFoundException('Schedule not found');
    }
    return schedule;
  }

  async update(id: string, updateScheduleDto: UpdateScheduleDto) {
    const updated = await this.schedulesRepo.update({ id }, updateScheduleDto);
    if (updated.affected === 0) {
      throw new NotFoundException('Schedule not found');
    }
    return await this.schedulesRepo.findOne({ where: { id } });
  }

  async remove(id: string) {
    return await this.schedulesRepo.delete(id);
  }
}
