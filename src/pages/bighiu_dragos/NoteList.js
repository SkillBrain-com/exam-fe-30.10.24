import React from "react";
import NoteCard from "../../components/NoteCard.js";

function NoteList({ notes }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p>No notes added yet.</p>
      ) : (
        notes.map((note, index) => (
          <div className="note" key={index}>
            <NoteCard title={note.title} content={note.content} />
          </div>
        ))
      )}
    </div>
  );
}

export default NoteList;
