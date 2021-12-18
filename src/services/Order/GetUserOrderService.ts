import Order from "../../database/model/Order";
import { AppError } from "../../errors/AppError";

class GetUserOrderService {
  async execute(id: string) {
    const userOrder = await Order.findById(id);

    if (!id) throw new AppError("Order not found!");

    return userOrder;
  }
}

export { GetUserOrderService };
