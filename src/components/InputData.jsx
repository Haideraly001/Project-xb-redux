import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userInputAdd, userPass } from "../Redux/slice";

const InputData = () => {
  const [isName, setIsName] = useState("");
  const [pass, setPass] = useState("");

  const isDispatch = useDispatch();

  const handleInput = () => {
    isDispatch(userInputAdd(isName));
    isDispatch(userPass(pass));
  };
  return (
    <div className="border border-red-500 py-5 px-10 m-2 ">
      <h2>Input Data</h2>
      <input
        type="text"
        placeholder="Enter your Name"
        onChange={(e) => setIsName(e.target.value)}
        className="border-blue-950 p-4"
      />
      <input
        type="text"
        placeholder="Enter your pass"
        onChange={(e) => setPass(e.target.value)}
        className="border-blue-950 p-4"
      />
      <button onClick={handleInput} className="p-4 bg-green-900 text-white">
        {" "}
        Submit
      </button>
    </div>
  );
};

export default InputData;
