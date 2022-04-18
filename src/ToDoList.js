import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from 'react-digital-clock';


const ToDoList = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
      alert("Minimum Value Is 0");
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <Clock />
          <h1>{num}</h1>
          <div className="btn_div">
          <Tooltip title="Add">
            <Button onClick={incNum} className="btn_green">
              <AddBoxIcon />
            </Button>
            </Tooltip>
            <Tooltip title="Delete">
            <Button onClick={decNum} className="btn_red">
              <DeleteIcon />
            </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
