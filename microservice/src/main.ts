import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const configService = app.get(ConfigService);

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'subscribers',
      protoPath: join(process.cwd(), 'src/subscribers/subscribers.proto'),
      url: 'localhost:1000'
    },
  });
  app.startAllMicroservices();
}
bootstrap();
// D:\office works\Rapid-Innovation\gRPC-Microservices\Microservice-Project_gRPC-7\microservice\src\subscribers\subscribers.proto