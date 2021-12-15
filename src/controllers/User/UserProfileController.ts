import { Request, Response } from "express";

import { UserProfileService } from "../../services/User/UserProfileService";

class UserProfileController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const service = new UserProfileService();

    const profile = await service.execute(id);

    return res.status(200).json(profile);
  }
}

export { UserProfileController };
