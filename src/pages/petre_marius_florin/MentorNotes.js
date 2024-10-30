import React, { useState } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";

const initialNote = {
  title: "First Note",
  content: "This is my first note",
};

function MentorNotes() {
  const [notes, setNotes] = useState([initialNote]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <AddNote onAddNote={handleAddNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default MentorNotes;
