import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../app/slice";

const Todo = () => {
  const todoSelect = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <h1>Todo List</h1>
      {todoSelect.map((item) => (
        <div key={item.id}>
          <h3>{item.text}</h3>
          <button onClick={() => handleRemove(item.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
