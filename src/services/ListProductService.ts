import Product from "../models/Products";

class ListProductService {
  async execute(id: string) {
    const product = await Product.findById(id);

    return product;
  }
}

export { ListProductService };
