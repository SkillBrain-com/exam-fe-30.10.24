import React from "react";
import GabrielDumitruNotes from "./pages/gabriel-dumitru/AddNotes";
import MentorNotes from "./pages/mentor/AddNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Note App</h1>
        <Routes>
          <Route path="/" element={<MentorNotes />} />
          <Route path="/gabriel-dumitru" element={<GabrielDumitruNotes />} />
          {/* Add your route here */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
