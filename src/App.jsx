import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Mode from "./pages/Mode.jsx";
import Todo from "./pages/Todo.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/mode" element={<Mode />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
    </Routes>
  );
}

export default App;
