# To-Do List Application


Este proyecto es una aplicación de lista de tareas con arquitectura de monorepo. El frontend está construido con React y Tailwind CSS, mientras que el backend es una API RESTful desarrollada en Node.js con Express.js, utilizando MongoDB Atlas como base de datos para la persistencia de datos.

La aplicación demuestra la integración de un stack de tecnología moderno, gestionando la comunicación entre el cliente y el servidor de forma asíncrona a través de operaciones CRUD.

------


## 🚀 Características

- Crear, editar, completar y eliminar tareas.
- Filtrar tareas por estado (todas, completadas, pendientes).
- Buscar tareas por título o contenido.
- Interfaz moderna y responsiva con TailwindCSS.
- Backend robusto con Express y MongoDB Atlas.

---------

##  📁 Estructura del Proyecto

El repositorio está organizado en dos directorios principales para una clara separación de responsabilidades:

frontend/: Contiene la aplicación de React y toda la lógica del cliente.

backend/: Contiene el servidor Node.js y la API REST.

```
To-Do-List-App-Blue-Technology-Solution/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   └── todo.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoList.jsx
│   │   │   ├── TodoItem.jsx
│   │   │   └── Modal.jsx
│   │   ├── App.jsx
│   │   ├── index.jsx       
│   │   └── index.css       
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── .gitignore
│
└── README.md
```

--------

 ## ⚙️ Requisitos y Configuración del Entorno

 Para ejecutar este proyecto, es necesario tener instalado Node.js y npm en tu sistema.


### 1. Clonar el Repositorio

Clona este repositorio en tu máquina local:

git clone https://github.com/Gabrielnunezpaulino/To-Do-List-App-Blue-Technology-Solution.git


### 2. Configuración de las Variables de Entorno


El backend requiere una variable de entorno para conectarse a la base de datos de MongoDB. Por motivos de seguridad, el archivo .env esta vacio, por ende debera de ingresar la siguiente variable de entorno:  

MONGO_URI=mongodb+srv://todoList_User:a8zJk8T8FbFasVIY@todolist.ekptajm.mongodb.net/?retryWrites=true&w=majority&appName=TodoList



### 3. Instalación de Dependencias

Para preparar el entorno de desarrollo, es necesario instalar las dependencias tanto para el frontend como para el backend. Ejecuta el siguiente comando desde la raíz del proyecto para instalar concurrently, la herramienta que gestiona los procesos de ambos servicios.

npm install

Posteriormente, utiliza el script install-all, que está configurado para instalar las dependencias de cada subdirectorio (frontend y backend) en un solo paso.

npm run install-all


### 4. Ejecución del Proyecto

Una vez que todas las dependencias estén instaladas y las variables de entorno configuradas, la aplicación se puede iniciar con un solo comando.

npm start



## 📝 Uso

- Haz clic en **Agregar** para crear una nueva tarea.
- Usa la barra de búsqueda y los filtros para encontrar y organizar tus tareas.
- Marca tareas como completadas, edítalas o elimínalas según lo necesites.

![alt text](image.png)

![alt text](image-1.png)

------

## 🧑‍💻 Tecnologías Utilizadas

**Frontend:** React, Tailwind CSS

**Backend:** Node.js, Express.js

**Base de Datos:** MongoDB (a través de MongoDB Atlas)

**Herramientas de Desarrollo:** concurrently, nodemon

------

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

------

## ✨ Autor

Gabriel Nuñez Paulino



