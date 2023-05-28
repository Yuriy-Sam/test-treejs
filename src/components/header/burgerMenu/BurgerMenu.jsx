import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./burgerMenu.scss";
import Burger from "../burger/Burger";
import { close } from "../../Opening";
const BurgerMenu = () => {
  return (
    // <div id="burger" className="burger__bg">
    //   <div
    //     id="burger__content"
    //     // className={active ? "burger__menu _active" : "burger__menu"}
    //     className={"burger__menu _active"}
    //   >
    //     <div className="burger__content">
    //       <div className="burger__logo__wrapper">
    //         <Link to={"/"} className="header__logo">
    //           {/* Мария<span>Комлык</span> */}
    //           Maria<span>Komlik</span>
    //           {/* Домашняя<span>Кухня</span> */}
    //         </Link>
    //         <Burger openMenu />
    //       </div>
    //       <nav>
    //         <ul className="burger__nav__list">
    //           <NavLink
    //             onClick={() => close("burger")}
    //             to={"/"}
    //             className={({ isActive }) =>
    //               isActive ? "burger__nav__item _active" : "burger__nav__item"
    //             }
    //           >
    //             Главная
    //           </NavLink>
    //           <NavLink
    //             onClick={() => close("burger")}
    //             to={"/products"}
    //             className={({ isActive }) =>
    //               isActive ? "burger__nav__item _active" : "burger__nav__item"
    //             }
    //           >
    //             Меню
    //           </NavLink>
    //           <NavLink
    //             onClick={() => close("burger")}
    //             to={"/contact"}
    //             className={({ isActive }) =>
    //               isActive ? "burger__nav__item _active" : "burger__nav__item"
    //             }
    //           >
    //             Контакты
    //           </NavLink>
    //         </ul>
    //       </nav>
    //       <div></div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BurgerMenu;
