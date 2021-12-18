import Cart from "../../database/model/Cart";
import { AppError } from "../../errors/AppError";

class DeleteCartService {
  async execute(id: string) {
    const deletedCart = await Cart.findByIdAndDelete(id);

    if (!deletedCart) throw new AppError("Cart not found");

    return deletedCart;
  }
}

export { DeleteCartService };
