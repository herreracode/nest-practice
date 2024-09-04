import { Injectable } from '@nestjs/common';
import { order } from '../domain/order.entity';

@Injectable()
export class PlaceOrderService {

    private orders: order[] = [];

    exec(
        product_id: string,
        amount: number
    ): order {

        this.orders.push(new order(
            1,
            product_id, 
            amount));

        return new order(1,product_id, amount);
    }

    get(id : number): order {
        return this.orders.find((order) => order.id === id);
    }
}
