import './App.css';
import { FaPlusSquare, FaTasks} from "react-icons/fa";
import TodoList from './TodoList';

function App() {
  return (
    <div className="container mt-5">
     <div class="card shadow card-div">
        <div class="card-body">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><FaTasks/></span>
          </div>
            <input type="text" class="form-control" placeholder="add item" aria-label="Username" aria-describedby="basic-addon1"/>
            <button type='button' className='btn btn-primary ml-4'><FaPlusSquare/></button>
        </div>
        </div>
         <TodoList/>
      </div>
    </div>
  );
}

export default App;
