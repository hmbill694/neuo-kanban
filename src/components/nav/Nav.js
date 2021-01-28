import React from "react";
import HamburgerIcon from "./HamburgerIcon";
import NavList from "./NavList";
const Nav = ({ displayFunction, isOpen }) => {
  const hamburgericonProps = { isOpen, displayFunction };
  return (
    <div>
      <HamburgerIcon {...hamburgericonProps} />
      <nav className="h-screen">
        <div
          className={`transition-all ease-in-out duration-500 flex justify-center items-center h-full ${
            isOpen ? "w-96 opacity-100" : "w-0 opacity-0"
          }`}
        >
          <NavList />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
