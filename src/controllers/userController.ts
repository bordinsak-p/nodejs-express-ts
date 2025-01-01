import { Request, Response } from "express";
import { UserService } from "../services/userService";

const userService = new UserService();

export class UserController {
  public getAllUsers(req: Request, res: Response) {
    const users = userService.getAllUsers(req, res)
    res.json(users);
  }
  public createUser(req: Request, res: Response) {
    return "Create a new user";
  }
  public getUserById(req: Request, res: Response) {
    return `Get user with ID ${req.params.id}`;
  }
}
