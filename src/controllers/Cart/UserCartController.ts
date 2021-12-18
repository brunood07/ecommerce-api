import { Request, Response } from "express";

import { UserCartService } from "../../services/Cart/UserCartService";

class UserCartController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const service = new UserCartService();

    const userCart = await service.execute(id);

    return res.status(200).json(userCart);
  }
}

export { UserCartController };
