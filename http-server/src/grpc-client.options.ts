import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: 'localhost:9000',
        package: 'subscribers',
        protoPath: join(__dirname, '../src/subscribers/subscribers.proto'),
    },
};