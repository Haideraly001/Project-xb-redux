import React from "react";
import Menulist from "./Menulist";

const Menuitem = ({ item }) => {
  return (
    <li>
      {item.label}
      {item && item.children && item.children.length > 0 ? (
        <ul>
          <li>
            <Menulist list={item.children} />
          </li>
        </ul>
      ) : null}
    </li>
  );
};

export default Menuitem;
