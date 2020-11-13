import React, { useEffect, useState, useRef } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const clickDetect = useRef();
  useEffect(() => {
    // add when mounted
    document.addEventListener("click", expand);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("click", expand);
    };
  }, []);

  function handleChange({ target }) {
    const { name, value } = target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.func(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function expand(event) {
    if (clickDetect.current.contains(event.target)) {
      setIsExpanded(true);

      return;
    }
    setIsExpanded(false);
  }
  return (
    <div ref={clickDetect}>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        ) : null}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab color="warning" aria-label="add" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
