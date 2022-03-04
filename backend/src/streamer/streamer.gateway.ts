// import {
//   WebSocketGateway,
//   OnGatewayConnection,
//   OnGatewayDisconnect,
//   OnGatewayInit,
//   WebSocketServer,
// } from '@nestjs/websockets';
// import { Logger } from '@nestjs/common';
// import { Server } from 'ws';

// @WebSocketGateway({ cors: true, namespace: '/streamer' })
// export class StreamerGateway
//   implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
// {
//   private logger: Logger = new Logger(StreamerGateway.name);
//   @WebSocketServer() server: Server;

//   public afterInit(server: Server): void {
//     return this.logger.log('Init');
//   }

//   public
// }
