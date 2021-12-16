import { Request, Response } from "express";

import { NewCartService } from "../../services/Cart/NewCartService";

class NewCartController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { userId, products } = req.body;

    const service = new NewCartService();

    const cart = service.execute({ userId, products });

    return res.status(200).json(cart);
  }
}

export { NewCartController };
