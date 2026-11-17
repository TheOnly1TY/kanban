import express from 'express'
import { login, signup } from '../controllers/auth.controller.js'
import { ValidateUser } from '../middleware/validate.js'
import { UserSchema } from '../schemas/users.schema.js'

const router = express.Router()

router.route('/login').post(login)
router.route('/signup').post(ValidateUser(UserSchema), signup)

export default router