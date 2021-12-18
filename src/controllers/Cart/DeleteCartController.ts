import { Request, Response } from "express";

import { DeleteCartService } from "../../services/Cart/DeleteCartService";

class DeleteCartController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const service = new DeleteCartService();

    await service.execute(id);

    return res.status(200).send("Cart Deleted Successfully!");
  }
}

export { DeleteCartController };
