import React from "react";
import AddNote from "./AddNote";
import NoteCard from "../../components/NoteCard";

// const initialNote = {
//   title: "First Note",
//   content: "This is my first note",
// };

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
      {/* <NoteCard title={initialNote.title} content={initialNote.content} /> */}
    </div>
  );
}

export default GabrielDumitruNotes;
