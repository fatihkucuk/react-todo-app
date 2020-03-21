import React, { useState } from "react";
import uuid from "uuid";
import AddTodo from "./AddTodo";

const TodoList = props => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      name: "Todo-1",
      description: "Learn React.js",
      deadline: new Date().toString(),
      isCompleted: true
    },
    {
      id: uuid(),
      name: "Todo-2",
      description: "Learn React Hooks",
      deadline: new Date().toString(),
      isCompleted: true
    },
    {
      id: uuid(),
      name: "Todo-3",
      description: "Learn Redux",
      deadline: new Date().toString(),
      isCompleted: false
    }
  ]);
  const [pageMode, setPageMode] = useState("List");
  const [todoToBeEdited, setTodoToBeEdited] = useState(null);
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  const addTodoHandler = () => {
    setPageMode("Insert");
  };

  const newTodoAdded = newTodo => {
    setTodos([...todos, newTodo]);
    setPageMode("List");
  };

  const todoUpdated = updatedTodo => {
    let updated = todos.find(todo => todo.id === updatedTodo.id);
    const index = todos.indexOf(updated);
    if (index > -1) {
      todos[index] = updatedTodo;
      setTodos([...todos]);
      setSelectedTodoId(null);
      setPageMode("List");
    }
  };

  const deleteHandler = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  const editHandler = id => {
    setSelectedTodoId(id);
    setPageMode("Update");
  };

  let todoItems = todos.length ? (
    todos.map(todo => {
      return (
        <AddTodo
          key={todo.id}
          todo={todo}
          pageMode={todo.id === selectedTodoId ? "Update" : "List"}
          newTodoAdded={newTodoAdded}
          todoUpdated={todoUpdated}
          deleteTodo={deleteHandler}
          editTodo={editHandler}
        />
      );
    })
  ) : (
    <tr>
      <td>There is no Todo</td>
    </tr>
  );
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todoItems}
          {pageMode === "Insert" ? (
            <AddTodo
              key={uuid()}
              todo={null}
              pageMode={pageMode}
              newTodoAdded={newTodoAdded}
              todoUpdated={todoUpdated}
              deleteTodo={deleteHandler}
              editTodo={editHandler}
            />
          ) : null}
        </tbody>
      </table>
      <button onClick={addTodoHandler}>Add New Todo</button>
    </React.Fragment>
  );
};

export default TodoList;
