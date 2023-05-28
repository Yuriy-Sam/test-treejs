import React, { useState } from "react";

import "./burger.scss";
const Burger = ({ openMenu }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="burger__block">
        <div className={openMenu ? "burger open" : "burger"}>
          <div className="icon"></div>
        </div>
      </div>
    </>
  );
};

export default Burger;
