import express from "express";
import AuthController from "../controllers/AuthController";
import { UserController } from './../controllers/userController';

class Auth {
  public router = express.Router();
  private authController = new AuthController();
  private userController = new UserController();

  constructor() {
    this.initializeAuthRoutes();
  }

  private initializeAuthRoutes() {
    this.router.post("/register", this.userController.createUser.bind(this.userController));
    this.router.post("/login", this.authController.login.bind(this.authController));
  }
}

export default new Auth().router;