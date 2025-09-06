import { useState, useEffect } from "react"
import TodoList from "./components/TodoList"
import Modal from "./components/Modal"

const API_URL = "http://localhost:4000/api/todos"

function App() {
    const [todos, setTodos] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState({ title: "", content: "" })
    const [editingTodo, setEditingTodo] = useState(null)
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

    const openModal = () => setIsModalOpen(true)

    const resetForm = () => {
        setFormData({ title: "", content: "" })
        setEditingTodo(null)
        setIsModalOpen(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (editingTodo) {
            
            const res = await fetch(`${API_URL}/${editingTodo._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, completed: editingTodo.completed }),
            })
            const updated = await res.json()
            setTodos(todos.map(todo => todo._id === updated._id ? updated : todo))
        } else {
            
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            const newTodo = await res.json()
            setTodos([newTodo, ...todos])

        }
        resetForm()
    }

    const toggleComplete = async (id) => {
        const todo = todos.find(t => t._id === id)
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...todo, completed: !todo.completed }),
        })
        const updated = await res.json()
        setTodos(todos.map(t => t._id === id ? updated : t))
    }
    const editTodo = (todo) => {
        setFormData({ title: todo.title, content: todo.content })
        setEditingTodo(todo)
        setIsModalOpen(true)
    }

    const deleteTodo = async (id) => {
        console.log("Eliminando todo con id:", id); 
        await fetch(`${API_URL}/${id}`, { method: "DELETE" })
        setTodos(todos.filter(todo => todo._id !== id))
    }


    const filteredTodos = todos
        .filter((todo) => {
            if (filter === "completed") return todo.completed
            if (filter === "pending") return !todo.completed
            return true
        })
        .filter((todo) =>
            todo.title.toLowerCase().includes(search.toLowerCase()) ||
            todo.content.toLowerCase().includes(search.toLowerCase())
        )

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10">
            <div className="max-w-3xl mx-auto px-4">

                <div className="text-center mb-8">
                    <h1 className="text-5xl text-indigo-700 font-extrabold tracking-tight drop-shadow-lg mb-2">To-Do List</h1>
                    <p className="text-indigo-400 text-lg font-semibold">Organiza tus tareas de manera eficiente</p>
                </div>


                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                    <button
                        onClick={openModal}
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg font-bold shadow-lg transition"
                    >
                        + Agregar
                    </button>
                    <input
                        type="text"
                        placeholder="Buscar tarea..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 px-4 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow"
                    />
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="px-4 py-2 rounded-lg border border-indigo-200 bg-white shadow focus:outline-none font-semibold text-indigo-700"
                    >
                        <option value="all">Todas</option>
                        <option value="completed">Completadas</option>
                        <option value="pending">Pendientes</option>
                    </select>
                </div>


                <TodoList
                    todos={filteredTodos}
                    toggleComplete={toggleComplete}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />


                <Modal
                    isOpen={isModalOpen}
                    onClose={resetForm}
                    onSubmit={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                    editingTodo={editingTodo}
                />
            </div>
        </div>
    )
}

export default App;