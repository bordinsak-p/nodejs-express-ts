import { Request } from "express";
import db from "../db";
import Helper from "../helpers/helpers";
import { User } from "../models/userModel";

export class UserService extends Helper {
  public getAllUsers(req: Request): Promise<User[]> {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM users", (err: Error, rows: User[]) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  public async createUser(req: Request<User>): Promise<Object> {
    const body = req.body;
    const hashedPassword = await this.hashPassword(body.password);
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
        [body.username, hashedPassword, body.email], function (err: Error | null) {
          if (err) {
            reject(err);
          } else {
            resolve({ userId: this.lastID });
          }
        }
      );
    });
  }
  public getUserById(id: string) {
    return `Get user with ID ${id}`;
  }
}
