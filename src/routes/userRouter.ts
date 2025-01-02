import express from "express";
import { UserController } from "../controllers/userController";

class UserRouter {
    public router = express.Router();
    private userController = new UserController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/getAllUsers", this.userController.getAllUsers.bind(this.userController));
        this.router.get("/getUserById/:id", this.userController.getUserById.bind(this.userController));
        this.router.post("/createUser", this.userController.createUser.bind(this.userController));
        this.router.put("/editUser", this.userController.editUser.bind(this.userController));
        this.router.delete("/deleteUser", this.userController.deleteUser.bind(this.userController));
    }
}

export default new UserRouter().router;