import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Mode from "./pages/Mode.jsx";
import Todo from "./pages/Todo.jsx";
import Cart from "./pages/Cart.jsx";
import Language from "./pages/Language.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/mode" element={<Mode />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/language" element={<Language />}></Route>
    </Routes>
  );
}

export default App;
