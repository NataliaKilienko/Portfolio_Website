import { useState } from "react";
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo" onClick={closeMenu}>
            <span>Front-End Engineer</span> portfolio
          </NavLink>

          <div className="burger-menu" onClick={toggleMenu}>
            <div className={`burger-icon ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className={`nav-list ${isMenuOpen ? "nav-list--open" : ""}`}>
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={closeMenu}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onClick={closeMenu}
              >
                Contacts
              </NavLink>
            </li>
            <li className="nav-list__item nav-list__item--dark-mode">
              <BtnDarkMode />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
