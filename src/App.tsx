import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BlockWrapper } from "./components/blockwrapper";
import { CursorContext } from "./components/context/cursorContext";
import { Menu } from "./components/menu";
import { PhotoWrapper } from "./components/photowrapper";

function App() {
  const [cursorTransition, setCursor] = useState({ x: 0, y: 0 });

  return (
    <CursorContext.Provider value={{ cursorTransition: cursorTransition }}>
      <div
        onMouseMove={(event) => {
          if (window.innerWidth > 767) {
            setCursor({
              x: (event.clientX - window.innerWidth / 2) / 50,
              y: (event.clientY - window.innerWidth / 2) / 50,
            });
          } else {
            setCursor({ x: 0, y: 0 });
          }
        }}
        className="App"
      >
        <Menu />
        <PhotoWrapper />

        <Routes>
          <Route path={"*" || "/"} element={<></>}></Route>
          <Route path="/about" element={<BlockWrapper route="about" />}></Route>
          <Route path="/works" element={<BlockWrapper route="works" />}></Route>
          <Route
            path="/skills"
            element={<BlockWrapper route="skills" />}
          ></Route>
        </Routes>
      </div>
    </CursorContext.Provider>
  );
}

export default App;
