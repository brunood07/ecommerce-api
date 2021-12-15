import { Request, Response } from "express";

import { ListProductService } from "../../services/Product/ListProductService";

class ListProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const service = new ListProductService();

    const product = await service.execute(id);

    return res.status(200).json(product);
  }
}

export { ListProductController };
