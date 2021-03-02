import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'PRODUCT_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqps://dyilfhrb:t-D-bfwdLxkRmp-2B-Q26ALBSa1a9rof@gerbil.rmq.cloudamqp.com/dyilfhrb'],
    //       queue: 'main-queue',
    //       queueOptions: {
    //         durable: false
    //       },
    //     },
    //   },
    // ]),
    ConfigModule
  ],
  controllers: [AppController],
  providers: [
    {
    provide: 'PRODUCT_SERVICE',
      useFactory: () => {
        
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: ['amqps://dyilfhrb:t-D-bfwdLxkRmp-2B-Q26ALBSa1a9rof@gerbil.rmq.cloudamqp.com/dyilfhrb'],
            queue: 'main-queue',
            queueOptions: {
              durable: true,
            },
          },
        })
      },
      inject: [ConfigService],
    }
  ],
})
export class AppModule {}
