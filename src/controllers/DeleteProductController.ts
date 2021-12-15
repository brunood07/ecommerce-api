import { Request, Response } from "express";

import { DeleteProductService } from "../services/DeleteProductService";

class DeleteProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const service = new DeleteProductService();

    await service.execute(id);

    return res.status(200).send("Product Deleted!");
  }
}

export { DeleteProductController };
