import React, { useState } from "react";
import "./leaked-passwords.scss";
import ListItem from "../../ListItem/ListItem";
import Button from "../../Button/Button";
import Picklist from "../../Picklist/Picklist";

const LeakedPasswordsWidget = ({ passwordsData }) => {
  const fixedVisible = 10; //number of items to show
  const [visible, setVisible] = useState(fixedVisible);
  const [orderBy, setOrderBy] = useState("count");

  const PicklistValues = [
    {
      title: "Count",
      value: "count",
    },
    {
      title: "Alphabetically",
      value: "value",
    },
  ];

  const show = () => {
    if (visible === passwordsData.length) {
      setVisible(10);
    } else {
      setVisible(passwordsData.length);
    }
  };

  //order passwords data
  passwordsData.sort((a, b) => {
    if (orderBy === "count") {
      return a[orderBy] - b[orderBy];//filter by count
    }
    else {
      return a[orderBy] > b[orderBy] ? 1 : -1; //filter alphabetically
    }
  }
  );

  return (
    <div className="leaked-passwords-widget">
      <div className="leaked-passwords-widget__table">
        <div className="leaked-passwords-widget__header">
          <h6>Password</h6>
          <Picklist
            PicklistValues={PicklistValues}
            func={(orderBy) => setOrderBy(orderBy)}
          />
        </div>
        <div className="leaked-passwords-widget__list">
          {passwordsData.slice(0, visible).map((psw, index) => (
            <ListItem
              index={index}
              password={psw.value}
              count={psw.count}
              key={index}
            />
          ))}
        </div>
      </div>
      <Button
        text={
          visible === passwordsData.length
            ? `show less (${fixedVisible})`
            : `show all (${passwordsData.length})`
        }
        className="button button--md"
        func={show}
      />
    </div>
  );
};

export default LeakedPasswordsWidget;
