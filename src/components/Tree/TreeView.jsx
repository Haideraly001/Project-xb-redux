import React from "react";
import Menulist from "./Menulist";

const TreeView = ({ data = [] }) => {
  return (
    <div>
      <div className="Tree-view-container">
        <Menulist list={data} />
      </div>
    </div>
  );
};

export default TreeView;
