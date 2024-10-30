import React from "react";
import MentorNotes from "./pages/mentor/AddNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddNotes from "../src/pages/bighiu_dragos/AddNotes.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Note App</h1>
        <Routes>
          <Route path="/" element={<MentorNotes />} />
          <Route path="dragos" element={<AddNotes />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
