import { Request, Response } from "express";

import { GetUserOrderService } from "../../services/Order/GetUserOrderService";

class GetUserOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const service = new GetUserOrderService();

    const userOrder = await service.execute(id);

    return res.status(200).json(userOrder);
  }
}

export { GetUserOrderController };
