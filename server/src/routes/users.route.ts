import express from 'express'
import { login, signup } from '../controllers/auth.controller.js'
import { ValidateUser } from '../middleware/users-validation.js'
import { LoginSchema, SignupSchema } from '../schemas/users.schema.js'

const router = express.Router()

router.route('/login').post(ValidateUser(LoginSchema), login)
router.route('/signup').post(ValidateUser(SignupSchema), signup)

export default router