import React from "react";
import Notecard from "../../components/NoteCard";
import "./NoteList.css";

function NoteList({ notes }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        notes.map((note, index) => (
          <div key={index} className="note-container">
            <Notecard title={note.title} className="notecard-title" />
            <Notecard content={note.content} className="notecard-content" />
          </div>
        ))
      )}
    </div>
  );
}

export default NoteList;
