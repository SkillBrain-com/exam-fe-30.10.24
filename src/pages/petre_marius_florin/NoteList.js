import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <NoteCard key={index} title={note.title} content={note.content} />
      ))}
    </div>
  );
};

export default NoteList;
