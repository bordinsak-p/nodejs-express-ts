import express from "express";
import { UserController } from "./../controllers/userController";

const router = express.Router();
const userController = new UserController();

router.get("/getAllUsers", userController.getAllUsers.bind(userController));

router.get("/getUserById/:id", userController.getUserById.bind(userController));

router.post("/createUser", userController.createUser.bind(userController));

router.put("/editUser", userController.editUser.bind(userController));

export default router;
