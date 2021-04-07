import React, { useState } from "react";
import ToDoList from './ToDoList';
import { Todo, ToggleTodo } from './types';

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
  // state
  const [todos, setTodos] = useState(initialTodos);

  // funtion to toggle todo
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      // if not
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <ToDoList todos={todos} toggleTodo={toggleTodo}/>
      {/* <ToDoListItem todo={todos[0]} toggleTodo={toggleTodo}/>
      <ToDoListItem todo={todos[1]} toggleTodo={toggleTodo}/> */}
    </React.Fragment>

  )

}

export default App;
