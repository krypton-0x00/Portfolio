import { useState } from "react";
import { name, hamburgerColor } from "../config/config.js";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  const [hamburgerEnable, setHamburgerEnable] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <div className="navContainer">
        <div
          className={` text-3xl md:hidden cursor-pointer hover:text-white  transition-all ${hamburgerColor}`}
          onClick={() => setHamburgerEnable((prev) => !prev)}
        >
          <RxHamburgerMenu />
        </div>
        <h1 className="name">{name}</h1>
        <ul className="navigations">
          <li className="li">
            <a href="/home">Home</a>
          </li>
          <li className="li">
            <a href="/about">About</a>
          </li>
          <li className="li">
            <a href="/projects">Projects</a>
          </li>
        </ul>
        {hamburgerEnable ? (
          <div className="hamburger-items">
            <ul className="">
              <li className="li-phone">
                <a href="/home">Home</a>
              </li>
              <li className="li-phone">
                <a href="/about">About</a>
              </li>
              <li className="li-phone">
                <a href="/projects">Projects</a>
              </li>
            </ul>
          </div>
        ) : null}
        {isLoggedIn ? (
          <div className=" transition-all text-white text-4xl hover:text-blue-600">
            <FaRegUserCircle />
          </div>
        ) : (
          <button className="button">Login</button>
        )}
      </div>
    </>
  );
}

export default Navbar;
