import { Body, Controller, Post } from '@nestjs/common';
import { PlaceOrderService } from './place-order.service';

@Controller('order')
export class PlaceOrderController {

    constructor(private placeOrderService : PlaceOrderService) {}

    @Post()
    create(@Body() body: any) {

        return this.placeOrderService.exec(body.product_id, body.amount);

    }
    
}
