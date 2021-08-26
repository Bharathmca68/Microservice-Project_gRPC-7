require('dotenv').config()
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscribersModule } from './subscribers/subscribers.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.Database, {
    autoCreate: true
  }), SubscribersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
