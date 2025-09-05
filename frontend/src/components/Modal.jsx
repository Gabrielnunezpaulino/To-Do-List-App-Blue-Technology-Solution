import React from "react"

function Modal({ isOpen, onClose, onSubmit, formData, setFormData, editingTodo }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-blue-700">
                    {editingTodo ? "Editar Tarea" : "Nueva Tarea"}
                </h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-semibold mb-2">Título</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-gray-700 font-semibold mb-2">Contenido</label>
                        <textarea
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-24 resize-none"
                            required
                        />
                    </div>
                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold shadow transition"
                        >
                            {editingTodo ? "Actualizar" : "Crear"}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-lg font-semibold shadow transition"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal