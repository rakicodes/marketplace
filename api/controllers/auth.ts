import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import { UserModel as User } from "../models/User";
import { generateToken, validateEmail } from "../utils/auth";
import { TUser } from "../types/user";
import { Request } from "express";
import { ParamsDictionary } from 'express-serve-static-core';

/**
 ** @desc    login user
 ** @route   POST /api/auth/login
 ** @access  Public
 */
export const login = asyncHandler(async (req, res) => {});

/**
 ** @desc    register new user
 ** @route   POST /api/auth/register
 ** @access  Public
 */
export const signup = asyncHandler(async (req: Request<ParamsDictionary, any, TUser>, res) => {
	try {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			res.status(400).json("Please add all fields");
			return;
		}

		// check if valid email
		if (!validateEmail(email)) {
			res.status(400).json("Invalid email");
			return;
		}

		// password length
		if (password.length <= 5) {
			res.status(400).json("Password must be at least 6 characters");
			return;
		}

		const userExists: TUser | null = await User.findOne({ email });
		if (userExists) {
			res.status(400).json("User already exists");
			return;
		}

		const salt: string = await bcrypt.genSalt(10);
		const hashPassword: string = await bcrypt.hash(password, salt);

        const user: TUser = await User.create({
			name,
			email,
			password: hashPassword,
		});
		if (user && user._id) {
			res.status(201).json({
				_id: user._id,
				name: user.name,
				email: user.email,
                token: generateToken(user._id)
			});
		} else {
			res.status(400).json("Invalid user data");
			return;
		}
	} catch (error) {
        console.log(error)
		res.status(400).json("Sorry something went wrong. Couldn't sign up");
	}
});
