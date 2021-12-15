import Product, { IProduct } from "../models/Products";

interface IRequest {
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

class NewProductService {
  async execute({
    title,
    description,
    image,
    category,
    price,
  }: IRequest): Promise<IProduct> {
    const newProduct = new Product({
      title,
      description,
      image,
      category,
      price,
    });

    const createProduct = newProduct.save();

    return createProduct;
  }
}

export { NewProductService };
