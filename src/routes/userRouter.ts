import express from "express";
import { UserController } from "./../controllers/userController";

const router = express.Router();
const userController = new UserController();

router.get("/getAllUsers", userController.getAllUsers.bind(userController));

router.post("/createUser", userController.createUser.bind(userController));

router.get("/:id", (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

export default router;
