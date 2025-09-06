import React from "react"
import TodoItem from "./TodoItem"

function TodoList({ todos, toggleComplete, editTodo, deleteTodo }) {
    if (todos.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No hay tareas aún. ¡Agrega tu primera tarea!</p>
            </div>
        )
    }

    return (
        <div className="grid gap-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    )
}

export default TodoList;