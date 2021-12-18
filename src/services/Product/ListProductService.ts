import Product from "../../database/model/Products";
import { AppError } from "../../errors/AppError";

class ListProductService {
  async execute(id: string) {
    const product = await Product.findById(id);

    if (!id) throw new AppError("Product not found!");

    return product;
  }
}

export { ListProductService };
