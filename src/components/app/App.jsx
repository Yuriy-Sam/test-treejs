import { useState } from "react";
// import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import CharacterMain from "../canvas/characterMain/CharacterMain";
import MainBlock from "../main/MainBlock.component";
import Header from "../header/Header";
import AnimatedCursor from "../cursor/AnimatedCursor";

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");
  return (
    <>
      <AnimatedCursor cursorVariant={cursorVariant} />
      <Header />
      {/* <MainBlock /> */}

      <MainBlock />
      <div className="cursor">
        <div className="cursor--small"></div>
        <div className="cursor--large"></div>
        <div className="cursor--text">
          <div className="text">GO HERE! GO HERE! GO HERE! GO HERE!</div>
        </div>
      </div>
    </>
  );
}

export default App;
