import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

// let state = {
//   count: 0,
// };

function App() {
  const [todos, settodos] = useState([
    {
      id: 1,
      text: "hello",
      isCompleted: false,
    },
    {
      id: 2,
      text: "world",
      isCompleted: false,
    },
  ]);
  function addTodo() {
    settodos([
      ...todos,
      {
        id: todos.length + 1,
        text: "new todo",
        isCompleted: false,
      },
    ]);
  }

  return (
    <>
      <button onClick={addTodo}>add a random todo</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
          <button
            onClick={() => settodos(todos.filter((t) => t.id !== todo.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
