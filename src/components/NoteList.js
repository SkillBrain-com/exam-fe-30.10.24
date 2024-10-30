import React from "react";

function NoteList({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <div key={index} className="note">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
