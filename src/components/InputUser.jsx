import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/Slice";

const InputUser = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const handleInput = () => {
    dispatch(addUser(user));
    console.log(addUser(user));
  };
  return (
    <div className="m-2 p-2 border">
      <h2>Input User</h2>
      <input
        className="border p-2 mr-2"
        type="text"
        onChange={(e) => setUser(e.target.value)}
      />
      <button
        className="bg-green-600 text-white rounded-md p-2"
        onClick={handleInput}
      >
        Submit
      </button>
    </div>
  );
};

export default InputUser;
