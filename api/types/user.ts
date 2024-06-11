import{ Model, Types } from "mongoose";

export type TUserId = Types.ObjectId

export type TUser = {
    _id?: TUserId,
    name: string,
    password: string,
    email: string,
}
export type TUserModel = Model<TUser>
