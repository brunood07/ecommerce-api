import { Request, Response } from "express";

import { NewProductService } from "../services/NewProductService";

class NewProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, description, image, category, price } = req.body;

    const service = new NewProductService();

    const product = await service.execute({
      title,
      description,
      image,
      category,
      price,
    });

    return res.status(201).json(product);
  }
}

export { NewProductController };
