import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/slice";

const AddTodo = () => {
  const [isInput, setIsInput] = useState("");

  const dispatcher = useDispatch();

  const handleInput = (e) => {
    setIsInput("");
    e.preventDefault();
    dispatcher(addTodo(isInput));
    // console.log(dispatcher);
  };

  return (
    <div className="bg-gray-200">
      <form onSubmit={handleInput}>
        <input
          type="text"
          placeholder="Enter a todo"
          className="border border-green-500 rounded-md py-2 px-5"
          onChange={(e) => setIsInput(e.target.value)}
        />
        <button type="submit" className="border border-amber-950 ml-4 p-2">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
