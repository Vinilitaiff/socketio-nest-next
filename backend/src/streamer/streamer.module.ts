import { Module } from '@nestjs/common';
import { StreamerService } from './streamer.service';
import { StreamerController } from './streamer.controller';
import { Streamer } from './entities/streamer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [StreamerService],
  controllers: [StreamerController],
  imports: [TypeOrmModule.forFeature([Streamer])],
})
export class StreamerModule {}
