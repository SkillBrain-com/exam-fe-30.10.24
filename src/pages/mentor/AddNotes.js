import React, { useState } from "react";
import AddNote from "../petre_marius_florin/AddNote";
import NoteList from "../petre_marius_florin/NoteList";

const initialNote = {
  title: "First Note",
  content: "This is my first note",
};

function MentorNotes() {
  const [notes, setNotes] = useState([initialNote]);
  console.log(notes);
  const handleAddNote = (newNote) => {
    // setNotes([...notes, newNote]);
    setNotes((prev) => [...prev, newNote]);
  };

  return (
    <div>
      <AddNote onAddNote={handleAddNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default MentorNotes;
