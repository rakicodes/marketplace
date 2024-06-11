import mongoose, { Schema } from "mongoose";
import { TAnalytic, TAnalyticModel } from "../types/analytic";

const AnalyticSchema = new Schema<TAnalytic, TAnalyticModel>({
        name: {
            type: String
        },
        data: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    });

export const AnalyticModel: TAnalyticModel = mongoose.model("Analytic", AnalyticSchema);