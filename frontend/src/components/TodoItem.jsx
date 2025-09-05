import React from "react"

function TodoItem({ todo, toggleComplete, editTodo, deleteTodo }) {
    return (
        <div
            className={`bg-white rounded-xl shadow-lg p-6 border-l-4 transition ${
                todo.completed ? "bborder-green-400 bg-green-50" : "border-indigo-400"
            }`}
        >
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <button
                            onClick={() => toggleComplete(todo.id)}
                            className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-lg font-bold transition ${
                                todo.completed
                                    ? "bg-green-400 border-green-400 text-white"
                                    : "border-indigo-300 hover:border-green-400"
                            }`}
                            title={todo.completed ? "Marcar como pendiente" : "Marcar como completada"}
                        >
                            {todo.completed && "✓"}
                        </button>
                        <h3
                            className={`text-2xl font-bold ${
                                todo.completed ? "line-through text-gray-400" : "text-gray-800"
                            }`}
                        >
                            {todo.title}
                        </h3>
                    </div>
                    <p className={`text-gray-600 mb-3 ${todo.completed ? "line-through" : ""}`}>{todo.content}</p>
                    <div className="flex items-center gap-4 text-sm text-indigo-400">
                        <span>
                            <span className="inline-block mr-1">🕒</span>
                            Creado: {new Date(todo.createdAt).toLocaleString()}
                        </span>
                    </div>
                </div>
                <div className="flex gap-2 ml-4">
                    <button
                        onClick={() => editTodo(todo)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded font-bold shadow transition"
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => deleteTodo(todo.id)}
                        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded font-bold shadow transition"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem