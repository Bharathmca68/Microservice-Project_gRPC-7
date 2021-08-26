import { Body, Controller, Get, Inject, Logger, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateSubscriberDto } from './subscribers-dto/CreateSubscriberDto';
import { SubscribersService } from './subscribers.service';

@Controller('subscribers')
export class SubscribersController {
    private subscribersService: SubscribersService;
    constructor(@Inject('subscribers') private client: ClientGrpc) { }
    onModuleInit() {
        this.subscribersService = this.client.getService<SubscribersService>('SubscribersService');
    }

    @Get()
    async getSubscribers() {
        return this.subscribersService.getAllSubscribers({});
    }

    @Post()
    async createPost(@Body() subscriber: CreateSubscriberDto) {
        return this.subscribersService.addSubscriber(subscriber);
    }
}
