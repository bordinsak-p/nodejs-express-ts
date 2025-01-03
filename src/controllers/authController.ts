import { Request, Response } from "express";
import ValiableConstants from "../constants/valiables";
import ResponseHelper from "../helpers/responseHelper";
import { User } from "../models/userModel";
import AuthService from "../services/authService";

export default class AuthController {
  private authService = new AuthService();
  private reshelper = new ResponseHelper();

  public async login(req: Request<User>, res: Response) {
    try {
      const result = await this.authService.login(req);
      res.status(ValiableConstants.STATUS_CODE.OK).json(this.reshelper.responseObject(result));
    } catch (err: any) {
      res.status(ValiableConstants.STATUS_CODE.INTERNAL_SERVER_ERROR).json(this.reshelper.responseError(err));
    }
  }
}
