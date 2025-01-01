import express from "express";
import { UserController } from "./../controllers/userController";

const router = express.Router();
const userController = new UserController();

router.get("/", userController.getAllUsers.bind(userController));

router.post("/", (req, res) => {
  res.send("Create a new user");
});

router.get("/:id", (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

export default router;
