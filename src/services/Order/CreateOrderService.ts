import Order, { IOrder } from "../../database/model/Order";

interface IRequest {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  };
  amount: number;
  address: string;
  status?: string;
}

class CreateOrderService {
  async execute({
    userId,
    products,
    amount,
    address,
    status,
  }: IRequest): Promise<IOrder> {
    const newOrder = new Order({ userId, products, amount, address, status });

    const createdOrder = newOrder.save();

    return createdOrder;
  }
}

export { CreateOrderService };
