import React, { useState } from "react";
import NoteList from "../../components/NoteList"; 

function AddNote() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
        // your code goes here
    e.preventDefault();
    if (title && content) {
      setNotes([{ title, content }, ...notes]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="add-note">
      <form onSubmit={handleSubmit} className="add-note-form">
        <input
          className="title-input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          className="content-input"
          placeholder="Content"
          value={content}
          onChange={handleContentChange}
        />
        <button className="submit-button" type="submit">
          Add Note
        </button>
      </form>
      <NoteList notes={notes} /> 
    </div>
  );
}

export default AddNote;
