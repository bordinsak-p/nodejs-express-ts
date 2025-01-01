import express from "express";
import userRouter from "./userRouter";

const router = express.Router();

// กำหนด path และ router
router.use("/users", userRouter);

export default router;
