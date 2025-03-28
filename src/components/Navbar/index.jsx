import React from "react";
import styles from "./navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1>My Shop</h1>
      <nav>
        <ul className={styles.navItems}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-black " : "text-gray-500"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-black " : "text-gray-500"
              }
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-black " : "text-gray-500"
              }
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
