import { Request, Response } from "express";

import { UpdateCartService } from "../../services/Cart/UpdateCartService";

class UpdateCartController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { userId, products } = req.body;

    const service = new UpdateCartService();

    const update = await service.execute({ id, userId, products });

    return res.status(200).json(update);
  }
}

export { UpdateCartController };
