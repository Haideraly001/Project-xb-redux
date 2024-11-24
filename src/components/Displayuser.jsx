import React from "react";
import { useSelector } from "react-redux";
const Displayuser = () => {
  const userData = useSelector((data) => data.users);
  console.log(userData);

  return (
    <div className="border p-6">
      <h3>Input User Data</h3>
      {userData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default Displayuser;
