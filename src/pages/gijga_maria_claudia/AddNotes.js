import React from "react";
import AddNote from "./AddNote";
import NoteCard from "./NoteCard";

const initialNote = {
  title: "First Note",
  content: "This is my first note",
};

function StudentNotes() {
  return (
    <div>
      <AddNote />
      <NoteCard title={initialNote.title} content={initialNote.content} />
    </div>
  );
}

export default StudentNotes;
