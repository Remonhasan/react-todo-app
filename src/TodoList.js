import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

export default function TodoList({name, updateMode, deleteTodo}) {
  return (
    <>
    <div className='mb-2 '>
    <ul className="list-group">
        <li className="list-group-item">
         {name}
        <button className='btn btn-default ml-2' onClick={updateMode}><FaEdit/></button>
        <button className='btn btn-default ml-2' onClick={deleteTodo}><FaTrash/></button>
        </li>
      </ul>
       
    </div>
    </>
  )
}
