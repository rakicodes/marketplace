import jwt from "jsonwebtoken";
import { TUserId } from "../types/user";

// Generate JWT token - sign a new token w the id + secret which will expire in 30 days
export const generateToken = (id: TUserId) => {
    const secret = process.env.JWT_SECRET || "secret"
    return jwt.sign({ id }, secret, {
      expiresIn: "30d",
    });
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};