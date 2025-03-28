import React, { useContext } from "react";
import styles from "./navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { FaUserCheck } from "react-icons/fa";
import { AuthContext } from "../../context/authContext";
const Navbar = () => {
  const { auth } = useContext(AuthContext);
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

      <div>
        {auth?.user ? <FaUserCheck fontSize={25} /> : <Link to="/login">  <CiLogin fontSize={25} /> </Link> }
    
      </div>
    </div>
  );
};

export default Navbar;
