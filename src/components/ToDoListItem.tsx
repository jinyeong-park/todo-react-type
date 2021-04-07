import React from 'react';
import { Todo } from './types';
import "./ToDoListItem.css";
interface ToDoListItemProps {
  todo: Todo;
  // todo: {
  //   text: string;
  //   complete: boolean;
  // }

}

const ToDoListItem: React.FC<ToDoListItemProps> = ({ todo })=> {

  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : "none"}}
      >
        <input type="checkbox" checked={todo.complete} />
          {todo.text}
      </label>
    </li>

  )

}

export default ToDoListItem

