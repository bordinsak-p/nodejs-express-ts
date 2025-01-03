import { Request, Response } from "express";
import ValiableConstants from "../constants/valiables";
import ResponseHelper from "../helpers/responseHelper";
import { User } from "../models/userModel";
import UserService from "../services/userService";

export class UserController  {
  private userService = new UserService();
  private reshelper = new ResponseHelper();

  public async getAllUsers(req: Request<User>, res: Response) {
    try {
      const users = await this.userService.getAllUsers(req);
      res.json(this.reshelper.responseList(users));
    } catch (err: any) {
      res
        .status(ValiableConstants.STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json(this.reshelper.responseError(err));
    }
  }

  public async createUser(req: Request<User>, res: Response) {
    try {
      const result = await this.userService.createUser(req);
      res.status(ValiableConstants.STATUS_CODE.OK).json(this.reshelper.responseObject(result));
    } catch (err: any) {
      res
        .status(ValiableConstants.STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json(this.reshelper.responseError(err));
    }
  }

  public async getUserById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const user = await this.userService.getUserById(id);
      res.status(ValiableConstants.STATUS_CODE.OK).json(this.reshelper.responseObject(user));
    } catch (err: any) {
      res
        .status(ValiableConstants.STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json(this.reshelper.responseError(err));
    }
  }

  public async editUser(req: Request<User>, res: Response) {
    try {
      const result = await this.userService.editUser(req);
      res.status(ValiableConstants.STATUS_CODE.OK).json(result);
    } catch (err: any) {
      res
        .status(ValiableConstants.STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json(this.reshelper.responseError(err));
    }
  }

  public async deleteUser(req: Request, res: Response) {
    try {
      const ids = req.body.ids;
      await this.userService.deleteUser(ids);
      res.status(ValiableConstants.STATUS_CODE.NO_CONTENT).send();
    } catch (err: any) {
      res
        .status(ValiableConstants.STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json(this.reshelper.responseError(err));
    }
  }
}
