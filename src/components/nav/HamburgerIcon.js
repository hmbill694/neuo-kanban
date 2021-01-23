import React from "react";

const baseRotateClasses =
  "transform transition-all ease-in-out duration-1000 nm-convex-white-lg h-1 w-16 my-1";
const topBarRotatedClasses = `${baseRotateClasses} rotate-45`;
const middleBarClasses = `${baseRotateClasses} opacity-0`;
const BottomBarRotatedClasses = `${baseRotateClasses} -rotate-45`;

const HamburgerIcon = ({ isOpen, displayFunction }) => {
  const rotateBar = (isOpen, activeClasses, inactiveClasses) =>
    `${isOpen ? activeClasses : inactiveClasses}`;
  return (
    <button className="absolute top-0 left-0 h-16 w-16 flex flex-col" onClick={() => displayFunction()}>
      <div
        className={rotateBar(isOpen, topBarRotatedClasses, baseRotateClasses)}
      >
      </div>
      <div className={rotateBar(isOpen, middleBarClasses, baseRotateClasses)}>
      </div>
      <div
        className={rotateBar(
          isOpen,
          BottomBarRotatedClasses,
          baseRotateClasses
        )}
      >
      </div>
    </button>
  );
};

export default HamburgerIcon;
