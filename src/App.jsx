import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Mode from "./pages/Mode.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/mode" element={<Mode />}></Route>
    </Routes>
  );
}

export default App;
