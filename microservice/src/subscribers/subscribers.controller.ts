import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubscriberDto } from './subscribers-dto/CreateSubscriberDto';
import { Subscribers } from './subscribers.model';

@Controller()
export class SubscribersService {
    constructor(
        @InjectModel(Subscribers.name) private readonly subscribersModel: Model<Subscribers>
    ) { }

    @GrpcMethod()
    async addSubscriber(subscriber: CreateSubscriberDto) {
        const { email, name } = subscriber
        const newSubscriber = new this.subscribersModel({
            email,
            name
        })
        return await newSubscriber.save();
    }


    @GrpcMethod()
    async getAllSubscribers() {
        const data = await this.subscribersModel.find();
        return {
            data
        }
    }

}
