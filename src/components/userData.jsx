import React from "react";
import { useSelector } from "react-redux";

const UserData = () => {
  const userList = useSelector((state) => state.user);
  console.log(userList);

  return (
    <div className="border border-red-500 py-5 px-10 m-2 ">
      <h2>User Data</h2>
      {userList.map((item) => (
        <h4 key={item.id}>{item.name}</h4>
      ))}
    </div>
  );
};

export default UserData;
