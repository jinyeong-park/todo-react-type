import React, { useState } from 'react';
import { AddTodo } from './types';


const AddToDoForm: React.FC = ({addTodo: AddTodo}) => {
  const [addedTodo, setAddedTodo] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addTodo(addedTodo)
  }
  return (
    <form onClick={handleSubmit}>
      <input type="text" onChange={(e) => setAddedTodo(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddToDoForm