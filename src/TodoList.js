import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

export default function TodoList() {
  return (
    <>
    <div className='mb-5'>
    <ul className="list-group">
        <li className="list-group-item">
         Buy Rice
        <button className='btn btn-default ml-2'><FaEdit/></button>
        <button className='btn btn-default ml-2'><FaTrash/></button>
        </li>
      </ul>
       
    </div>
    <div className='m-0 mt-2 mb-3'>
    © Remon Hasan
    </div>
    </>
  )
}
