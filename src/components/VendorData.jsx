import React from "react";
import { useSelector } from "react-redux";

const VendorData = () => {
  const userData = useSelector((data) => data.users);
  console.log(userData);

  return (
    <div className="border p-6 m-5">
      <h1>Vendor Data</h1>
      {userData.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default VendorData;
