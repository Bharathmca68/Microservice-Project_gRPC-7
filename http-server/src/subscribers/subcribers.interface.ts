// import Subscriber from './subscriber.service';
import { CreateSubscriberDto } from './subscribers-dto/CreateSubscriberDto';
import { Subscribers } from './subscribers.entity';

interface SubscribersService {
    addSubscriber(subscriber: CreateSubscriberDto): Promise<Subscribers>
    getAllSubscribers(params: {}): Promise<{ data: Subscribers[] }> // Subscribers doubts
}

export default SubscribersService;