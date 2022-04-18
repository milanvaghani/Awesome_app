import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id)
    }
  return (
    <>
      <Card>
        <div>
          <h1>{props.title}</h1>
          <br />
          <p>{props.content}</p>
          <Button onClick={deleteNote} variant="primary" color="primary" href="#contained-buttons">
            <IconButton aria-label="delete" disabled color="primary">
              <DeleteOutlineIcon />
            </IconButton>
          </Button>
        </div>
      </Card>
    </>
  );
};

export default Note;
