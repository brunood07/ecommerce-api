import Order from "../../database/model/Order";
import { AppError } from "../../errors/AppError";

class DeleteOrderService {
  async execute(id: string) {
    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) throw new AppError("Order not found!");

    return deletedOrder;
  }
}

export { DeleteOrderService };
