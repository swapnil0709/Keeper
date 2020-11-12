import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notesData from "./data/notes";

function createNotes(note) {
  return <Note key={note.key} title={note.title} content={note.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notesData.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
