import { Router } from "express";

import { CreateOrderController } from "../controllers/Order/CreateOrderController";
import { DeleteOrderController } from "../controllers/Order/DeleteOrderController";
import { GetUserOrderController } from "../controllers/Order/GetUserOrderController";
import { UpdateOrderController } from "../controllers/Order/UpdateOrderController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const orderRoutes = Router();

const createOrderController = new CreateOrderController();
const updateOrderController = new UpdateOrderController();
const deleteOrderController = new DeleteOrderController();
const getUserOrderController = new GetUserOrderController();

orderRoutes.post("/new", ensureAuthenticated, createOrderController.handle);
orderRoutes.put(
  "/update/:id",
  ensureAuthenticated,
  updateOrderController.handle
);
orderRoutes.delete(
  "/delete/:id",
  ensureAuthenticated,
  deleteOrderController.handle
);
orderRoutes.get(
  "/list/:id",
  ensureAuthenticated,
  getUserOrderController.handle
);

export { orderRoutes };
