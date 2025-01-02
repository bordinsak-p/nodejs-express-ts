import express from "express";
import userRouter from "./userRouter";

class AppRouter {
    public router = express.Router();
    
    constructor() {
        this.initializeAppRoutes();
    }

    private initializeAppRoutes() {
        this.router.use("/users", userRouter);
    }
}

export default new AppRouter().router;