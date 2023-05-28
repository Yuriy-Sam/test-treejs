import React, { useState } from "react";

import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import Burger from "./burger/Burger";

const Header = () => {
  return (
    <header className="header__wrapper">
      <div className="header__row">
        {/* <Link to={"/"} className="header__logo">
          Maria<span>Komlik</span>
        </Link> */}
        <a href="#" className="header__logo">
          Yuriy Samoilemko
        </a>
        <Burger />
      </div>
    </header>
  );
};
// Header.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
//   await store.dispatch(fetchCategories());
//   await store.dispatch(fetchGoods());
// });

export default Header;
