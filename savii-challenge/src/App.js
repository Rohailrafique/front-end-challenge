import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="App">
      <>
        <TopNav>Header section</TopNav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
