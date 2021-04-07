import React, { useState } from 'react';
import { AddTodo } from './types';

interface AddToDoFormProps {
  addTodo: AddTodo;

}

const AddToDoForm: React.FC<AddToDoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // call addTodo in App
    addTodo(newTodo)
    // clear out the input
    setNewTodo("");
  }
  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Add Todo</button>
    </form>
  )
}

export default AddToDoForm