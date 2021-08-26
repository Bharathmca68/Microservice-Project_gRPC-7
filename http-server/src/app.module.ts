import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Subscribers } from './subscribers/subscribers.entity';
import { SubscribersModule } from './subscribers/subscribers.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3309,
    username: 'root',
    password: 'password',
    database: 'user',
    entities: [Subscribers],
    synchronize: true,
  }), SubscribersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
