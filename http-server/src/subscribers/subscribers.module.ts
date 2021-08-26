import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { SubscribersController } from './subscribers.controller';
import { Subscribers } from './subscribers.entity';
import { SubscribersService } from './subscribers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Subscribers]),
  ClientsModule.register([{
    name: 'subscribers',
    transport: Transport.GRPC,
    options: {
      package: 'subscribers',
      protoPath: join(process.cwd(), 'src/subscribers/subscribers.proto'),
      url: 'localhost:1000'
    },
  }])
  ],
  controllers: [SubscribersController],
  providers: [SubscribersService]
})
export class SubscribersModule { }
