import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscribersService } from './subscribers.controller';
import { Subscribers, subscribersSchema } from './subscribers.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Subscribers.name, schema: subscribersSchema }])
  ],
  exports: [],
  controllers: [SubscribersService],
})
export class SubscribersModule { }
