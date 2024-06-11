import mongoose, { Schema } from "mongoose";
import { TUser, TUserModel } from "../types/user";

const UserSchema = new Schema<TUser, TUserModel>({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    });

export const UserModel: TUserModel = mongoose.model("User", UserSchema);