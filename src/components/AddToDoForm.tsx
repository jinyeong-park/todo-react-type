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
    addTodo(newTodo)
  }
  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Add Todo</button>
    </form>
  )
}

export default AddToDoForm