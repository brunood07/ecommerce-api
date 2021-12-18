import Cart, { ICart } from "../../database/model/Cart";

interface IRequest {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  };
}

class NewCartService {
  async execute({ userId, products }: IRequest): Promise<ICart> {
    const newCart = new Cart({ userId, products });

    const createdCart = await newCart.save();

    return createdCart;
  }
}

export { NewCartService };
