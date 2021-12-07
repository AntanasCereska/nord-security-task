import React from "react";
import "./list-item.scss";
const ListItem = ({ index, password, count }) => {
  return (
    <div className="list-item">
      <p className="list-item__index">{index + 1}.</p>
      <div className="list-item__data">
        <p>
          <strong>{password}</strong>
        </p>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default ListItem;
