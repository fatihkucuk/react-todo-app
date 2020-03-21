import React, { useState, useEffect } from "react";
import uuid from "uuid";
const AddTodo = props => {
  const [name, setName] = useState(props.todo ? props.todo.name : "");
  const [description, setDescription] = useState(
    props.todo ? props.todo.description : ""
  );
  const [deadline, setDeadline] = useState(
    props.todo ? props.todo.deadline : ""
  );
  const [isCompleted, setIsCompleted] = useState(
    props.todo ? props.todo.isCompleted : false
  );

  const saveHandler = () => {
    const newTodo = {
      id: props.pageMode === "Insert" ? uuid() : props.todo.id,
      name,
      description,
      deadline,
      isCompleted
    };
    if (props.pageMode === "Insert") props.newTodoAdded(newTodo);
    else if (props.pageMode === "Update") props.todoUpdated(newTodo);
  };

  const cancelHandler = () => {};

  const editHandler = () => {
    props.editTodo(props.todo.id);
  };

  const deleteHandler = () => {
    props.deleteTodo(props.todo.id);
  };

  let nameCell;
  let descriptionCell;
  let deadlineCell;
  let isCompletedCell;

  switch (props.pageMode) {
    case "List":
      nameCell = <span>{props.todo.name}</span>;
      descriptionCell = <span>{props.todo.description}</span>;
      deadlineCell = <span>{props.todo.deadline}</span>;
      isCompletedCell = (
        <span>{props.todo.isCompleted ? "Completed" : "Not Completed"}</span>
      );
      break;
    case "Insert":
      nameCell = (
        <input type="text" onChange={e => setName(e.target.value)}></input>
      );
      descriptionCell = (
        <input
          type="text"
          onChange={e => setDescription(e.target.value)}
        ></input>
      );
      deadlineCell = (
        <input type="date" onChange={e => setDeadline(e.target.value)}></input>
      );
      isCompletedCell = (
        <input
          type="checkbox"
          onChange={e => setIsCompleted(e.target.value)}
        ></input>
      );
      break;
    case "Update":
      nameCell = (
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        ></input>
      );
      descriptionCell = (
        <input
          type="text"
          onChange={e => setDescription(e.target.value)}
          value={props.todo.description}
        ></input>
      );
      deadlineCell = (
        <input
          type="date"
          onChange={e => setDeadline(e.target.value)}
          value={new Date(props.todo.deadline).toGMTString()}
        ></input>
      );
      isCompletedCell = (
        <input
          type="checkbox"
          checked={props.todo.isCompleted}
          onChange={e => setIsCompleted(e.target.value)}
          value={props.todo.isCompleted}
        ></input>
      );
      break;
    default:
      break;
  }

  let buttons;
  if (props.pageMode === "List") {
    buttons = (
      <>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
      </>
    );
  } else if (props.pageMode === "Insert" || props.pageMode === "Update") {
    buttons = (
      <>
        <button onClick={saveHandler}>Save</button>
        <button onClick={cancelHandler}>Cancel</button>
      </>
    );
  }

  return (
    <tr>
      <td>{nameCell}</td>
      <td>{descriptionCell}</td>
      <td>{deadlineCell}</td>
      <td>{isCompletedCell}</td>
      <td>{buttons}</td>
    </tr>
  );
};

export default AddTodo;
