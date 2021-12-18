import Cart from "../../database/model/Cart";

interface IRequest {
  id: string;
  userId?: string;
  products: {
    productId: string;
    quantity: number;
  };
}

class UpdateCartService {
  async execute({ id, products }: IRequest) {
    const updatedCart = await Cart.findByIdAndUpdate(
      id,
      {
        $set: { products },
      },
      { new: true }
    );

    return updatedCart;
  }
}

export { UpdateCartService };
