import React from "react";
import { useSelector } from "react-redux";

const PassData = () => {
  const passList = useSelector((state) => state.user);
  // console.log(passList);

  return (
    <div className="border border-red-500 py-5 px-10 m-2  ">
      <h2>password Data</h2>
      {passList.map((item) => (
        <p key={item.id}>{item.pass}</p>
      ))}
    </div>
  );
};

export default PassData;
