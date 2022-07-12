import { useEffect, useState } from "react";
//Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path={"game/:id"} exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
