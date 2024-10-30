import React from "react";
import AddNote from "./AddNote";
import NoteCard from "../../components/NoteCard";
import "./AddNotes.css";

function GabrielDumitruNotes() {
  const [notes, setNotes] = React.useState([{ title: "", content: "" }]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div>
      <AddNote addNote={addNote} />
      {notes.map(
        (note, index) =>
          (note.title || note.content) && (
            <NoteCard key={index} title={note.title} content={note.content} />
          )
      )}
    </div>
  );
}

export default GabrielDumitruNotes;
