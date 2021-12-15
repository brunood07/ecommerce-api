import { Request, Response } from "express";

import { UpdateProductService } from "../../services/Product/UpdateProductService";

class UpdateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, description, image, category, price } = req.body;

    const service = new UpdateProductService();

    const update = await service.execute({
      id,
      title,
      description,
      image,
      category,
      price,
    });

    return res.status(200).json(update);
  }
}

export { UpdateProductController };
