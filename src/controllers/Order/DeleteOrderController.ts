import { Request, Response } from "express";

import { DeleteOrderService } from "../../services/Order/DeleteOrderService";

class DeleteOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const service = new DeleteOrderService();

    await service.execute(id);

    return res.status(200).send("Order deleted!");
  }
}

export { DeleteOrderController };
