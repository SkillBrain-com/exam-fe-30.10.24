import React, { useState } from "react";
import "./AddNote.css";

function AddNote({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    const newNote = { title, content };
    addNote(newNote);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <input
        className="title-input"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="content-input"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="submit-button" type="submit">
        Add Note
      </button>
    </form>
  );
}

export default AddNote;
