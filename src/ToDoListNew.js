import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@mui/icons-material/Add";
import listCom from "./listCom";

const ToDoListNew = () => {
  const [item, setItem] = useState();
  const [newItem, setNewItem] = useState([]);

  const ItemEvents = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Add An Items"
            onChange={ItemEvents}
          />
          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newItem.map((val,index) => {
              return <listCom key={index} text={val} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default ToDoListNew;
