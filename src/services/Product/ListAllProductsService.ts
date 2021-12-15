import Product from "../../database/model/Products";

class ListAllProductsService {
  async execute() {
    const allProducts = await Product.find();

    return allProducts;
  }
}

export { ListAllProductsService };
