import React from "react";

const baseRotateClasses =
  "transform transition-all ease-in-out duration-1000 nm-inset-gray-500 h-1 w-10 my-0.5";
const topBarRotatedClasses = `${baseRotateClasses} rotate-45 translate-y-2`;
const middleBarClasses = `${baseRotateClasses} opacity-0`;
const BottomBarRotatedClasses = `${baseRotateClasses} -rotate-45 -translate-y-2`;

const HamburgerIcon = ({ isOpen, displayFunction }) => {
  const rotateBar = (isOpen, activeClasses, inactiveClasses) =>
    `${isOpen ? activeClasses : inactiveClasses}`;
  return (
    <button className="absolute top-2 left-2 h-fit w-fit flex flex-col focus:outline-none" onClick={() => displayFunction()}>
      <div
        className={rotateBar(isOpen, topBarRotatedClasses, baseRotateClasses)}
      >
      </div>
      <div className={rotateBar(isOpen, middleBarClasses, baseRotateClasses)}>
      </div>
      <div
        className={rotateBar( isOpen, BottomBarRotatedClasses, baseRotateClasses)}
      >
      </div>
    </button>
  );
};

export default HamburgerIcon;
