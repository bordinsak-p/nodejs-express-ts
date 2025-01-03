import { User } from "../models/userModel";
 
export default class JwtHelper {
    private jwt = require("jsonwebtoken");
    private dotenv = require("dotenv");

    constructor() {
        this.dotenv.config();
    }

    // สร้าง jwt token
    public generateToken(req: User): string {
        const { user_id } = req 
        const token = this.jwt.sign({ user_id: user_id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        return token;
    }

    public verifyToken() {

    }
}