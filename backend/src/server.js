import dotenv from "dotenv"
dotenv.config()

import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import Todo from "./models/todo.js" 
const app = express()
app.use(cors())
app.use(express.json())




mongoose.connect(process.env.MONGO_URI,{ dbName: "todoList" })
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((err) => console.error("Error de conexión:", err))


app.get("/api/todos", async (req, res) => {
    const todos = await Todo.find().sort({ createdAt: -1 })
    res.json(todos)
})

app.post("/api/todos", async (req, res) => {
    const { title, content } = req.body
    const todo = new Todo({ title, content })
    await todo.save()
    res.status(201).json(todo)
})

app.put("/api/todos/:id", async (req, res) => {
    const { id } = req.params
    const { title, content, completed } = req.body
    const todo = await Todo.findByIdAndUpdate(id, { title, content, completed }, { new: true })
    res.json(todo)
})

app.delete("/api/todos/:id", async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndDelete(id)
    res.status(204).end()
})


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en el puerto ${PORT}`)
})
