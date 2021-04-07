import React from 'react';
import { Todo, ToggleTodo } from './types';
import '../styles/TodoListItem.css';
import ToDoListItem from './ToDoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const ToDoList: React.FC<TodoListProps> = ({ todos, toggleTodo })=> {

  return (
    <ul>
      {todos.map(todo => {
        return <ToDoListItem todo={todo} toggleTodo={toggleTodo}/>;
      })}
    </ul>

  )

}

export default ToDoList

