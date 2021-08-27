import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const configService = app.get(ConfigService);
  app.enableCors();                                           // allowing all the origins

  // app.enableCors({                                       -> add this to allow for particular origin
  //   origin:'http:localhost:3000'                           // it allow only the particular origin like here in this origin allowed only from 3000   
  // })                                                     ->

  app.use(helmet())                                           // while using this it wrappes around 15 small middleware, out of 15 11 middleware ll enable by default 

  // remaining 4 middlewares are as follows 
  app.use(helmet({ crossOriginEmbedderPolicy: true }));        // instead of using cors we can use this 
  app.use(helmet({ crossOriginResourcePolicy: true }));        // it block a given response before it enters an attacker's process.
  app.use(helmet({ crossOriginOpenerPolicy: true }));          // does not share a browsing context group with cross-origin documents
  app.use(helmet({ originAgentCluster: true }));               // allow web applications to isolate their origins


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