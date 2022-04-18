import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Card from "@material-ui/core/Card";
import Note from "./Note";

const CreateNote = (props) => {
    const [expand,setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () =>{
    props.passNote(note);
    setNote({
        title: "",
        content: "",
      });
  }

  const expandIt = () => {
      setExpand(true)
  }

  return (
    <>
      <Card>
        <div>
          <form>
            {expand ? <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
            /> :null}
            <textarea
              rows=""
              column=""
              name="content"
              value={note.content}
              onChange={InputEvent}
              placeholder="Write A Note..."
              onClick={expandIt}
            />
            {expand ? <Button onClick={addEvent} variant="primary" color="primary" href="#contained-buttons">
              <AddCircleIcon />
            </Button> : null}
          </form>
        </div>
      </Card>
    </>
  );
};

export default CreateNote;
