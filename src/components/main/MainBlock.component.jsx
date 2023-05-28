import React from "react";
import CharacterMain from "../canvas/characterMain/CharacterMain";
import "./mainBlock.scss";
const MainBlock = () => {
  return (
    <section className="mainBlock">
      <div className="mainBlock__wrapper">
        <h1 className="mainBlock__title">
          Yuriy
          <br />
          Samoilenko
        </h1>

        <p className="mainBlock__subtitle">creative frontend Developer</p>
      </div>
      {/* <CharacterMain /> */}
    </section>
  );
};

export default MainBlock;
