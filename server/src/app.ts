import express from "express";
import morgan from 'morgan'
import boardsRouter from './routes/boards.route.js'
import usersRouter from './routes/users.route.js'
import AppError from "./utils/app-error.js";
import { globalErrorHandler } from "./controllers/error-handling.controller.js";

const app = express();

app.use(express.json())
app.use(morgan('dev'));

app.use('/api/v1/boards', boardsRouter)
app.use('/api/v1/users', usersRouter)

app.get("/", (req, res) =>  {
    res.status(200).json({message: "Hello from Kanban API"})
})

app.all('/{*path}', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
})

app.use(globalErrorHandler)

export default app;

// firstname, email, password