import{ Model, Types } from "mongoose";

export type TId = Types.ObjectId

export type TAnalytic = {
    _id?: TId,
    name: string,
    data: number
}

export type TAnalyticModel = Model<TAnalytic>
