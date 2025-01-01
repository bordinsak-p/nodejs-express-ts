import { Request, Response } from "express";
import ValiableConstants from "../constants/valiables";
import { User } from "../models/userModel";
import { UserService } from "../services/userService";

export class UserController {
  private userService = new UserService();

  public async getAllUsers(req: Request, res: Response) {
    const users = await this.userService.getAllUsers(req);
    res.json(users);
  }

  public async createUser(req: Request<User>, res: Response) {
    try {
      const result = await this.userService.createUser(req);
      res.status(ValiableConstants.STATUS_CODE.OK).json(result);
    } catch (err: any) {
      res
        .status(ValiableConstants.STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ error: err.message });
    }
  }

  public getUserById(req: Request, res: Response) {
    return `Get user with ID ${req.params.id}`;
  }
}
