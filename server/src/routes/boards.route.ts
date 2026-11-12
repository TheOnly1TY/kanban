import express from 'express'
import { getAllBoards } from '../controllers/boards.controller.js'

const router = express.Router()

router.route('/').get(getAllBoards)

export default router