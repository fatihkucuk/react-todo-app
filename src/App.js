import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [newTodo, setNewTodo] = useState(null);
  const addTodoHandler = todo => {
    setNewTodo(todo);
  };

  return (
    <div className="App">
      <AddTodo todoAdded={addTodoHandler} />
      <TodoList todo={newTodo} />
    </div>
  );
}

export default App;
