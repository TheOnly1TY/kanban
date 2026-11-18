import express from 'express'
import { getAllBoards } from '../controllers/boards.controller.js'
import { protect } from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/').get(protect ,getAllBoards)

export default router