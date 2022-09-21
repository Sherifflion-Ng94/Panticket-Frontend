import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Homepage from "./Home/Homepage";
import Event from "./Events/Event";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/event/:eventid" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
