import { AppError } from "../errors/AppError";
import Product from "../models/Products";

class DeleteProductService {
  async execute(id: string) {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) throw new AppError("Product not found");

    return deletedProduct;
  }
}

export { DeleteProductService };
