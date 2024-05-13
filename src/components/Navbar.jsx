import { useState } from "react";
import { name, hamburgerColor } from "../config/config.js";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [hamburgerEnable, setHamburgerEnable] = useState(false);
  return (
    <>
      <div className="navContainer">
        <div
          className={`text-3xl md:hidden cursor-pointer hover:text-white text-blue-600 transition-all ${hamburgerColor}`}
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
        <button className="button">Login</button>
      </div>
    </>
  );
}

export default Navbar;
