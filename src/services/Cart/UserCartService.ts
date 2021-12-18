import Cart from "../../database/model/Cart";
import { AppError } from "../../errors/AppError";

class UserCartService {
  async execute(id: string) {
    const userCart = Cart.findById(id);

    if (!id) throw new AppError("Cart not found!");

    return userCart;
  }
}

export { UserCartService };
