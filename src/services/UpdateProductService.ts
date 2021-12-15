import Product from "../models/Products";

interface IRequest {
  id: string;
  title?: string;
  description?: string;
  image?: string;
  category?: string;
  price?: number;
}

class UpdateProductService {
  async execute({ id, title, description, image, category, price }: IRequest) {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: { id, title, description, image, category, price },
      },
      { new: true }
    );

    return updatedProduct;
  }
}

export { UpdateProductService };
