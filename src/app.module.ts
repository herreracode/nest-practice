import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaceOrderController } from './place-order/place-order.controller';
import { PlaceOrderService } from './place-order/place-order.service';

@Module({
  imports: [],
  controllers: [AppController, PlaceOrderController],
  providers: [AppService, PlaceOrderService],
})
export class AppModule {}
