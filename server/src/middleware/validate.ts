import * as z from 'zod'
import { NextFunction, Request, Response } from "express"
import AppError from "../utils/app-error.js"

export const ValidateUser = <T extends z.ZodType>(schema: T) => {
   return (req: Request, res: Response, next: NextFunction) => {
        const result =  schema.safeParse(req.body)

        if(!result.success) {
            const error = result.error.issues.map((i) => ({field: i.path.join('.'), message: i.message}))

        return next(new AppError("Validation failed", 400, error))
        }

        req.body = result.data
    next()
}
}