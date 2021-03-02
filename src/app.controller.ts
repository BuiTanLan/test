import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('PRODUCT_SERVICE')  private readonly client: ClientProxy) {}

  @EventPattern('hello')
  async hello(data: any){
    console.log(data);
  }
}
