import { useEffect, useState } from "react";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//Router
import { Routes, Route, Router } from "react-router-dom";
//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path={"game/:id"} exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
