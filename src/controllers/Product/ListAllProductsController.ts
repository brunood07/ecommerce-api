import { Request, Response } from "express";

import { ListAllProductsService } from "../../services/Product/ListAllProductsService";

class ListAllProductsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const service = new ListAllProductsService();

    const allProducts = await service.execute();

    return res.status(200).json(allProducts);
  }
}

export { ListAllProductsController };
