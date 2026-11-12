import express from "express";

const app = express();

app.use(express.json())

app.get("/", (req, res) =>  {
    res.status(200).json({message: "Hello from Kanban API"})
})

app.get('/{*path}', (req, res) => {
    res.send("Route not found")
})

export default app;