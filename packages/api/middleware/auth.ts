import jwt, { JwtPayload } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { Response, NextFunction } from "express";
import { UserModel as User } from "../models/User";
import { IRequestExtendsUser, TUser } from "../types/user";

const protect = asyncHandler(async (
	req: IRequestExtendsUser,
	res: Response,
	next: NextFunction
) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			// get token from header - 'Bearer token'
			token = req.headers.authorization.split(" ")[1];

			// verify token
			const { id } = jwt.verify(
				token,
				process.env.JWT_SECRET || "JWT_SECRET"
			) as JwtPayload;
			// get user from the token
			const user: TUser | null = await User.findById(id).select("-password");
			if (user) {
				req.user = user;
			} 

			next(); // calls the next piece of middleware
		} catch (err) {
            console.log(err)
			res.status(401).json("Not authorized");
		}
	}
	if (!token) {
		res.status(401).json("Not authorized. No token");
		return;
	}
});

export default protect
