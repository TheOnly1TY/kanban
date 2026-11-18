import dotenv from 'dotenv';
import { NextFunction, Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt, { SignOptions } from 'jsonwebtoken';
import AppError from "../utils/app-error.js"
import { catchAsync } from "../utils/catch-async.js"
import { createUser, getUser } from "../services/users-service.js"
import { promisify } from 'util';

dotenv.config({ path: "./config.env" });

const signToken = (id: string) => {
    return jwt.sign({id}, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_EXPIRES_IN as SignOptions['expiresIn'] })
}

const comparePassword = async(candidatePassword: string, userPassword: string) => {
    return await bcrypt.compare(candidatePassword, userPassword)
}

const login = catchAsync(async(req: Request, res: Response, next: NextFunction) => {

    const {email: userEmail, password} = req.body

    const result = await getUser("email", userEmail)

    if(!result || !(await comparePassword(password, result.password))) return next(new AppError('Incorrect email or password', 401))

    const token = signToken(result.id)

      res.status(201).json({
        status: 'success',
        message: 'User logged-in successfully',
        token
    })
})

const signup = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
    const {name, email, password} = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user  = await createUser({name, email, password: hashedPassword})

    const token = signToken(user.id)

    res.status(201).json({
        status: 'success',
        message: 'Account created successfully',
        user,
        token
    })
})

const protect = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
    let token;

    if(req.headers.authorization && req.headers.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
    }

    if(!token) return next(new AppError('You are not logged in. Please log in to get access.', 401))

    const decoded = await (promisify(jwt.verify) as (token: string, secret: string) => Promise<any>)(
        token,
        process.env.JWT_SECRET!
    );

    const user = await getUser('id', decoded.id)

    if(!user) return next(new AppError('The user belonging to this token does not exist', 401))

    req.user = user

    next()
})

const forgotPassword = (req: Request, res: Response, next: NextFunction) => {}

const resetPassword = (req: Request, res: Response, next: NextFunction) => {}


export { login, signup, forgotPassword, protect, resetPassword }