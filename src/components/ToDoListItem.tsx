import React from 'react';
import { Todo, ToggleTodo } from './types';
import '../styles/TodoListItem.css';
interface ToDoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  // todo: {
  //   text: string;
  //   complete: boolean;
  // }

}

const ToDoListItem: React.FC<ToDoListItemProps> = ({ todo, toggleTodo })=> {

  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}
        // style={{ textDecoration: todo.complete ? "line-through" : "none"}}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
          {todo.text}
      </label>
    </li>

  )

}

export default ToDoListItem

