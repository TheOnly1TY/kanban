import { Request, Response } from 'express';
import {getAllBoards as getAllBoardsService} from '../services/boards-service.js'

const getAllBoards = async (req: Request, res: Response) => {
    const result = await getAllBoardsService()
    
    res.status(200).json({
        status: 'success',
        message: 'Boards loaded',
        data: result
    })
}

export { getAllBoards }