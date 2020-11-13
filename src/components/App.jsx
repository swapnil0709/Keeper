import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notesArray, setNotesArray] = useState([]);

  function addNote(note) {
    if (note.title == "" && note.content == "") {
      return;
    }
    setNotesArray((prevValues) => {
      return [...prevValues, note];
    });
  }

  function deleteNote(id) {
    setNotesArray((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea func={addNote} />
      {notesArray.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
