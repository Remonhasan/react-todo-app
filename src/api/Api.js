import axios from 'axios'

const baseUrl = "https://nodejs-todo-app-jj16.onrender.com"

// Get All 
const getAllTodo = (setTodo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('Todo List:', data)
            setTodo(data)
        })
}

// Add Task 
const addTodo = (name, setName, setTodo) => {
    axios
        .post(`${baseUrl}/save`, { name })
        .then((data) => {
            console.log('Added New Task:', data)
            setName("")
            getAllTodo(setTodo)
        })
        .catch((err) => console.log(err))
}

// Update Todo
const updateTodo = (todoId, name, setTodo, setName, setIsUpdate) => {
    axios
        .post(`${baseUrl}/update`, { _id: todoId, name })
        .then((data) => {
            setName("")
            setIsUpdate(false)
            getAllTodo(setTodo)
        })
        .catch((err) => console.log(err))
}

// Delete Todo
const deleteTodo = (_id, setTodo) => {
    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log('Deleted Task:', data)
            getAllTodo(setTodo)
        })
        .catch((err) => console.log(err))
}

export { getAllTodo, addTodo, updateTodo, deleteTodo }