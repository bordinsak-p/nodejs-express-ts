import { Request } from "express";
import db from "../db";
import Helper from "../helpers/helpers";
import { User } from "../models/userModel";

export class UserService extends Helper {
  public getAllUsers(req: Request): Promise<User[]> {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM users", (err: Error, rows: User[]) => {
        if (err) reject(err.message);
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
            reject(err.message);
          } else {
            resolve({ userId: this.lastID });
          }
        }
      );
    });
  }

  public getUserById(id: string): Promise<User> {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM users WHERE user_id = ?", [id], (err: Error, row: User) => {
        if (err) reject(err.message);
        else resolve(row);
      });
    });
  }
  
  public editUser(req: Request<User>): Promise<Object> {
    const body = req.body;
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE users SET username = ?, email = ? WHERE user_id = ?",
        [body.username, body.email, body.userId], function (err: Error | null) {
          if (err) {
            reject(err.message);
          } else {
            resolve({ userId: this.changes });
          }
        }
      );
    });
  }

  public deleteUser(ids: number[]): Promise<Object> {
     const userIds = ids.length > 1 ? ids.map(() => '?').join(',') : ids[0];
     const sql = `DELETE FROM users WHERE user_id IN (${userIds})`     
      return new Promise((resolve, rejects) => {
        db.run(sql, ids, function (err: Error | null) {
          if (err) {
            rejects(err.message);
          } else {
            resolve({ userId: this.changes });
          }
        });
      })
    }
}
