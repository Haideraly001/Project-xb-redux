import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../app/slice";

const Todo = () => {
  const todoList = useSelector((state) => state.todos);
  const Dispatch = useDispatch();

  const [editTodo, setEditTodo] = useState(null);
  const [newText, setNewText] = useState("");

  const handleRemove = (todoId) => {
    Dispatch(removeTodo(todoId));
  };

  console.log(todoList);

  const handleUpdate = (todoId) => {
    Dispatch(updateTodo(todoId));
  };

  return (
    <div>
      <h2> Todo List </h2>
      {todoList.map((todo) => (
        <div key={todo.id} className="flex">
          <p className="border bg-gray-300 py-3 px-6 mx-10 w-2/3">
            {todo.todo}
          </p>

          <button onClick={() => handleRemove(todo.id)}>X</button>
          <button
            onClick={() => handleUpdate(todo.id, todo)}
            className="ml-2 border"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
