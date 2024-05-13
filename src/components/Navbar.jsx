import { useState } from "react";
import { name, hamburgerColor } from "../config/config.js";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [hamburgerEnable, setHamburgerEnable] = useState(false);
  return (
    <>
      <div className="navContainer">
        <div
          className={`text-3xl md:hidden cursor-pointer hover:text-white transition-all ${hamburgerColor}`}
          onClick={() => setHamburgerEnable((prev) => !prev)}
        >
          <RxHamburgerMenu />
        </div>
        <p className="name">{name}</p>
        <ul className="navigations">
          <li className="li">
            <a href="">Home</a>
          </li>
          <li className="li">
            <a href="">About</a>
          </li>
          <li className="li">
            <a href="">Projects</a>
          </li>
        </ul>
        {hamburgerEnable ? (
          <div className="hamburger-items">
            <ul className="">
              <li className="li-phone">
                <a href="">Home</a>
              </li>
              <li className="li-phone">
                <a href="">About</a>
              </li>
              <li className="li-phone">
                <a href="">Projects</a>
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
