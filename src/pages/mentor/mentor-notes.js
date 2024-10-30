import React from "react";
import AddNote from "../../components/AddNoteTemplate";
import NoteCard from "../../components/NoteCard";

const initialNote = {
  title: "First Note",
  content: "This is my first note",
};

function MentorNotes() {
  return (
    <div>
      <AddNote />
      <NoteCard title={initialNote.title} content={initialNote.content} />
    </div>
  );
}

export default MentorNotes;
