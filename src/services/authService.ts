import { Request } from "express";
import db from "../db";
import Helper from "../helpers/helpers";
import JwtHelper from "../helpers/jwtHelper";
import { User } from "../models/userModel";

export default class AuthService {
    private helper = new Helper();
    private jwtHelper = new JwtHelper();

    public async login(req: Request<User>): Promise<string> {
        const { password } = req.body;
        const userResult = await this.findByUsername(req);
        if(!userResult) throw "User not found";
        const isPasswordMatch = await this.helper.comparePassword(password, userResult.password);
        if(!isPasswordMatch) throw "Invalid username or password";
        const token = this.jwtHelper.generateToken(userResult)
        return token;
    }

    private findByUsername(req: Request<User>): Promise<User> {
        const { username } = req.body;
        return new Promise((resolve, reject) => {
            db.get("select * from users where username = ?", [username], (err: Error, row: User) => {
                if(err) reject(err.message);
                else resolve(row);
            });           
        });
    }
}