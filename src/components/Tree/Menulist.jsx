import React from "react";
import Menuitem from "./Menuitem";

const Menulist = ({ list = [] }) => {
  return (
    <ul className="main-list-container">
      {list && list.length
        ? list.map((listItem) => <Menuitem item={listItem} />)
        : null}
    </ul>
  );
};

export default Menulist;
