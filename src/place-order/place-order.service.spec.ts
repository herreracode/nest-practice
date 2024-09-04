import { Test, TestingModule } from '@nestjs/testing';
import { PlaceOrderService } from './place-order.service';
import { order } from '../domain/order.entity';

describe('PlaceOrderService', () => {
  let service: PlaceOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaceOrderService],
    }).compile();

    service = module.get<PlaceOrderService>(PlaceOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('give the user create a order when has product available then place order', () => {
    const orderObject = service.exec('1', 1);

    expect(orderObject).toBeInstanceOf(order);
    expect(orderObject.productId).toBe('1');

    
  });

});
