import Product from "../../database/model/Products";

class ListProductService {
  async execute(id: string) {
    const product = await Product.findById(id);

    return product;
  }
}

export { ListProductService };
