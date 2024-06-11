import{ Model, Types } from "mongoose";
import { Request } from "express";

export type TUserId = Types.ObjectId

export type TUser = {
    _id?: TUserId,
    name?: string,
    password: string,
    email: string,
}

export type TUserModel = Model<TUser>

export interface IRequestExtendsUser extends Request {
    user?: TUser
}