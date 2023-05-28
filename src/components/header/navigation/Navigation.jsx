import React from "react";

import "./navigation.scss";
import { Link, NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <ul className="navigation__list">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "navigation__item _active" : "navigation__item"
          }
        >
          Главная
        </NavLink>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive ? "navigation__item _active" : "navigation__item"
          }
        >
          Меню
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "navigation__item _active" : "navigation__item"
          }
        >
          Контакты
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
