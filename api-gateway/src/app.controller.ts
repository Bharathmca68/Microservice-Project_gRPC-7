import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateSubscriberDto } from './subscribers-dto/CreateSubscriberDto';
const axios = require('axios');

@Controller('subscribers')
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  async get_subscribers(): Promise<any> {
    const data = await axios.get('http://localhost:8000/subscribers')
    console.log(data.data);
    return data.data
  }

  @Post()
  async Post_subscribers(@Body() subscriber: CreateSubscriberDto): Promise<any> {
    // const event = subscriber
    await axios.post('http://localhost:8000/subscribers', subscriber)
    console.log(subscriber);
    return 'datasent'
  }
}
