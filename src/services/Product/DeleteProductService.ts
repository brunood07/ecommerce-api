import Product from "../../database/model/Products";
import { AppError } from "../../errors/AppError";

class DeleteProductService {
  async execute(id: string) {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) throw new AppError("Product not found");

    return deletedProduct;
  }
}

export { DeleteProductService };
