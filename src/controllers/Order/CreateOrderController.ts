import { Request, Response } from "express";

import { CreateOrderService } from "../../services/Order/CreateOrderService";

class CreateOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { userId, products, amount, address, status } = req.body;

    const service = new CreateOrderService();

    const order = service.execute({
      userId,
      products,
      amount,
      address,
      status,
    });

    return res.status(201).json(order);
  }
}

export { CreateOrderController };
