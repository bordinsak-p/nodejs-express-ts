import express from "express";
import authRouter from "./authRouter";
import userRouter from "./userRouter";

class AppRouter {
    public router = express.Router();
    
    constructor() {
        this.initializeAppRoutes();
    }

    private initializeAppRoutes() {
        this.router.use("/users", userRouter);
        this.router.use("/auth", authRouter);
    }
}

export default new AppRouter().router;