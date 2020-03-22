import React, { useState } from "react";
import uuid from "uuid";
import "./AddTodo.css";
const AddTodo = props => {
  const [description, setDescription] = useState(
    props.todo ? props.todo.description : ""
  );

  const [updateMode, setUpdateMode] = useState(!!props.todo);

  const addTodoHandler = () => {
    const newTodo = {
      id: uuid(),
      description
    };
    props.todoAdded(newTodo);
    setDescription("");
  };

  const updateTodoHandler = () => {
    const updatedTodo = {
      id: props.todo.id,
      description
    };
    props.todoUpdated(updatedTodo);
    setDescription("");
  };

  const cancelHandler = () => {
    setUpdateMode(false);
    props.canceled();
  };

  const nameChangedHandler = e => {
    setDescription(e.target.value);
  };

  const styles = {
    input: {
      padding: 0
    },
    button: {
      padding: 10,
      width: "auto"
    }
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        onChange={nameChangedHandler}
        value={description}
        placeholder="ex: Learn React Hooks and Redux"
      ></input>
      {updateMode ? (
        <>
          <button
            className="btn btn-red"
            onClick={cancelHandler}
            style={styles.button}
          >
            Cancel
          </button>
          <button
            className="btn btn-blue"
            onClick={updateTodoHandler}
            style={styles.button}
          >
            Update
          </button>
        </>
      ) : (
        <button className="btn btn-blue" onClick={addTodoHandler}>
          Add
        </button>
      )}
    </div>
  );
};

export default AddTodo;
