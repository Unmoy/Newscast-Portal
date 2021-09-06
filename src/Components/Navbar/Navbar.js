import React from "react";
import "./Navbar.css";
import { MenuList } from "./MenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="logo">Newscast Portal</h1>
      <div className="menu_icon" onClick={handleClick}>
        <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
      </div>
      <ul className={clicked ? `nav_menu active` : `nav_menu`}>
        {MenuList.map((item, index) => {
          return (
            <li key={index}>
              <a className="nav_link" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
