import React, { useState } from "react";
import AddNote from "./AddNote.js";
import NoteList from "./NoteList.js";
import "./styles.css";

function AddNotes() {
  const [notes, setNotes] = useState([]);

  const addNote = (title, content) => {
    const newNote = { title, content };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="add-notes">
      <AddNote addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default AddNotes;
