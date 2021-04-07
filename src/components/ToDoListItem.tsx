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
      <label>
        <input type="checkbox" checked={todo.complete} />
          {todo.text}
      </label>
    </li>

  )

}

export default ToDoListItem

