import Order from "../../database/model/Order";

interface IRequest {
  id: string;
  products?: {
    productId: string;
    quantity: number;
  };
  amount?: number;
  address?: string;
  status?: string;
}

class UpdateOrderService {
  async execute({ id, products, amount, address, status }: IRequest) {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      {
        $set: { products, amount, address, status },
      },
      { new: true }
    );

    return updatedOrder;
  }
}

export { UpdateOrderService };
