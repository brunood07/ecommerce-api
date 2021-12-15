import Product from "../models/Products";

class ListAllProductsService {
  async execute() {
    const allProducts = await Product.find();

    return allProducts;
  }
}

export { ListAllProductsService };
