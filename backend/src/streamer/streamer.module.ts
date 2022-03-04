import { Module } from '@nestjs/common';
import { StreamerService } from './streamer.service';
import { StreamerController } from './streamer.controller';
import { Streamer } from './entities/streamer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamerGateway } from './streamer.gateway';

@Module({
  providers: [StreamerService, StreamerGateway],
  controllers: [StreamerController],
  imports: [TypeOrmModule.forFeature([Streamer])],
})
export class StreamerModule {}
