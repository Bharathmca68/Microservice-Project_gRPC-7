import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscribers } from './subscribers.entity';

@Injectable()
export class SubscribersService {
    constructor(
        @InjectRepository(Subscribers)
        private readonly subscribersRepository: Repository<Subscribers>,
    ) { }

    async getAllSubscribers({ }) {
        return await this.subscribersRepository.find()
    }

    async addSubscriber(subscriber) {
        console.log(subscriber)
        return await this.subscribersRepository.save(subscriber)
    }
}
