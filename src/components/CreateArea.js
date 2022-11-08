import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import { Expand } from "@mui/icons-material";

function CreateArea(props) {
  const initialValues = {
    title: "",
    content: "",
  };

  const [values, setValues] = React.useState(initialValues);
  const [expand, setexpand] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function addToNote(e) {
    e.preventDefault();
    if (
      document.getElementById("input").value !== "" &&
      document.getElementById("content").value !== ""
    ) {
      props.note(values);
      document.getElementById("input").value = "";
      document.getElementById("content").value = "";
    }
  }

  function extend() {
    setexpand(true);
  }

  return (
    <div>
      <form>
        {expand ? (
          <input
            id="input"
            name="title"
            onChange={handleInputChange}
            placeholder="Title"
          />
        ) : null}
        <textarea
          onChange={handleInputChange}
          onClick={extend}
          id="content"
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
        />
        <Zoom in={expand}>
          <button onClick={addToNote}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
