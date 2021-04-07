import React, { useState } from "react";
import ToDoListItem from './ToDoListItem';
import { Todo } from './types';

// move to types.ts
// type Todo = {
//   text: string;
//   complete: boolean;
// }

const initialTodos: Array<Todo> = [
  {text: "Take a walk", complete: true},
  {text: "create an app", complete: false}
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <React.Fragment>
      <ToDoListItem todo={todos[0]}/>
      <ToDoListItem todo={todos[1]}/>
    </React.Fragment>

  )

}

export default App;
