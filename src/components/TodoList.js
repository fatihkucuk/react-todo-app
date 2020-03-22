import React, { useState, useEffect } from "react";
import uuid from "uuid";
import AddTodo from "./AddTodo";
import "./TodoList.css";
const TodoList = props => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      description: "Learn React.js"
    },
    {
      id: uuid(),
      description: "Learn React Hooks"
    },
    {
      id: uuid(),
      description: "Learn Redux"
    }
  ]);

  const [selectedTodoId, setSelectedTodoId] = useState(null);

  useEffect(() => {
    if (props.todo) setTodos([...todos, props.todo]);
  }, [props.todo]);

  const deleteHandler = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  const openEditMode = id => {
    setSelectedTodoId(id);
  };

  const updateTodoHandler = updatedTodo => {
    const index = todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index > -1) {
      todos[index] = updatedTodo;
      setSelectedTodoId(null);
    }
  };

  const cancelHandler = () => {
    setSelectedTodoId(null);
  };

  const styles = {
    listItem: {
      padding: 0
    }
  };

  const todoListItems = todos.map((todo, index) => {
    const shouldUpdate = selectedTodoId === todo.id;
    return (
      <li key={todo.id} style={shouldUpdate ? styles.listItem : {}}>
        {shouldUpdate ? (
          <AddTodo
            todo={todo}
            todoUpdated={updateTodoHandler}
            canceled={cancelHandler}
          />
        ) : (
          todo.description
        )}

        {!shouldUpdate ? (
          <>
            <button
              className="btn btn-red"
              onClick={deleteHandler.bind(this, todo.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-blue"
              onClick={openEditMode.bind(this, todo.id)}
            >
              Edit
            </button>
          </>
        ) : null}
      </li>
    );
  });
  return <ul className="TodoList">{todoListItems}</ul>;
};

export default TodoList;
