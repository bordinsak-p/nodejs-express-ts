import { Request, Response } from "express";

export class UserService {
  private users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  public getAllUsers(req: Request, res: Response) {
    return req.body;
  }

  public async createUser() {
    return "Create a new user";
  }
  
  public async getUserById(id: string) {
    return `Get user with ID ${id}`;
  }
}
