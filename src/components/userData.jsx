import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRemove } from "../Redux/slice";

const UserData = () => {
  const userList = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(userRemove(id));
  };

  return (
    <div className="border border-red-500 py-5 px-10 m-2 ">
      <h2>User Data</h2>
      {userList.map((item) => (
        <div
          key={item.id} // Key must be on the top-level element returned by the map function
          className="flex items-center justify-between"
        >
          <h3>{item.name}</h3>
          <button
            className="text-lg border px-2 py-1 ml-2"
            onClick={() => handleRemove(item.id)}
          >
            Remove user
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserData;
