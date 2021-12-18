import { Request, Response } from "express";

import { UpdateOrderService } from "../../services/Order/UpdateOrderService";

class UpdateOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { products, amount, address, status } = req.body;
    const { id } = req.params;

    const service = new UpdateOrderService();

    const updatedOrder = await service.execute({
      id,
      products,
      amount,
      address,
      status,
    });

    return res.status(200).json(updatedOrder);
  }
}

export { UpdateOrderController };
