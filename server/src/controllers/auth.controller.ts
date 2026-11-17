import dotenv from 'dotenv';
import { NextFunction, Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt, { SignOptions } from 'jsonwebtoken';
import AppError from "../utils/app-error.js"
import { catchAsync } from "../utils/catch-async.js"
import { createUser } from "../services/users-service.js"

dotenv.config({ path: "./config.env" });

const login = (req: Request, res: Response) => {
    res.send("Hello from the login route")
}

const signup = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
    const {name, email, password} = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user  = await createUser({name, email, password: hashedPassword})

    const token = jwt.sign({id: user.id,}, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_EXPIRES_IN as SignOptions['expiresIn'] })

    res.status(201).json({
        status: 'success',
        message: 'Account created successfully',
        user,
        token
    })
})

const forgotPassword = (req: Request, res: Response) => {}

const protect = (req: Request, res: Response) => {}

export { login, signup, forgotPassword, protect }