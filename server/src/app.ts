import express from "express";
import boardsRouter from './routes/boards.route.js'
import AppError from "./utils/app-error.js";
import { globalErrorHandler } from "./controllers/error-handling.controller.js";

const app = express();

app.use(express.json())
app.use('/api/v1/boards', boardsRouter)

app.get("/", (req, res) =>  {
    res.status(200).json({message: "Hello from Kanban API"})
})

app.all('/{*path}', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
})

app.use(globalErrorHandler)

export default app;