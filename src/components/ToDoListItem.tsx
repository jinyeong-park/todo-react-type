import React from 'react';

interface ToDoListItemProps {
  todo: {
    text: string;
    complete: boolean;
  }

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

