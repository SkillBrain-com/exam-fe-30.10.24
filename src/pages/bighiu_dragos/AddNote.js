import React, { useState } from "react";
import "./styles.css";

function AddNote({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill in all fields.");
      return;
    }

    addNote(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="add-note-container">
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
    </div>
  );
}

export default AddNote;
