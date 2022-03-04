import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateStreamerDto } from './dto/create-streamer.dto';
import { UpdateStreamerDto } from './dto/update-streamer.dto';
import { Streamer } from './entities/streamer.entity';

@Injectable()
export class StreamerService {
  constructor(
    @InjectRepository(Streamer)
    private streamerRepository: Repository<Streamer>,
  ) {}

  async create(data: CreateStreamerDto): Promise<Streamer> {
    return await this.streamerRepository.save(data);
  }

  async findAll(): Promise<Streamer[]> {
    return await this.streamerRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} streamer`;
  }

  async update(id: number, data: UpdateStreamerDto): Promise<Streamer> {
    const streamer = await this.streamerRepository.findOne({ where: { id } });

    const updated = await this.streamerRepository.save({
      ...streamer,
      ...data,
    });

    //add funcao do socket

    return updated;
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.streamerRepository.delete(id);
  }
}
