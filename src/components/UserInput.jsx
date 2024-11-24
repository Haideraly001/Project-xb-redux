import React, { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

const UserInput = () => {
  const [userData, setUserData] = useState("");
  const dispatch = useDispatch();

  const handleInput = () => {
    dispatch(addUser(userData));
  };
  return (
    <div className="p-8 border">
      <h1 className="text-3xl font-bold mb-4">User Input</h1>
      <input
        type="text"
        placeholder="username"
        className="border border-l-indigo-950 p-4"
        onChange={(e) => setUserData(e.target.value)}
      />
      <button
        className="ml-4 bg-indigo-500 text-white px-4 py-2"
        onClick={handleInput}
      >
        Add
      </button>
    </div>
  );
};

export default UserInput;
