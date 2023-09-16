import './App.css';
import { FaTasks } from "react-icons/fa";
import TodoList from './TodoList';
import { useEffect, useState } from 'react';
import { getAllTodo, addTodo, updateTodo, deleteTodo } from './api/Api';

function App() {

  const [todo, setTodo] = useState([])
  const [name, setName] = useState("")
  const [isUpdate, setIsUpdate] = useState(false)
  const [todoId, setTodoId] = useState("")

  useEffect(() => {
    getAllTodo(setTodo)
  }, [])

  const updateMode = (_id, name) => {
    setIsUpdate(true)
    setName(name)
    setTodoId(_id)
  }

  return (
    <div className="container mt-5">
      <div className="card shadow card-div">
        <div className="card-body">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1"><FaTasks /></span>
            </div>
            <input type="text"
              className="form-control"
              placeholder="add item"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              type='button'
              className='btn btn-primary ml-4'
              onClick={
                isUpdate ? () => updateTodo(todoId, name, setTodo, setName, setIsUpdate)
                  : () => addTodo(name, setName, setTodo)
              }
            >
              {isUpdate ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
        {todo.map((item) =>
          <TodoList
            key={item._id}
            name={item.name}
            updateMode={() => updateMode(item._id, item.name)}
            deleteTodo={() => deleteTodo(item._id, setTodo)}
          />
        )}


      </div>
    </div>
  );
}

export default App;
