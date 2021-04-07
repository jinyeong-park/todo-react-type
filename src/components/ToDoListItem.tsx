import React from 'react';
import { Todo } from './types';
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
      <input type="checkbox" checked={todo.complete}>
        {todo.text}
      </input>
    </li>

  )

}

export default ToDoListItem

