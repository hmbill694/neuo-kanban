import { useState } from "react";
import Column from "../components/general/Column";
import HamburgerIcon from '../components/nav/HamburgerIcon'
import { map } from "../utils/fp";

const Home = () => {
  const [showCols, setShowCols] = useState(true)
  const [showSideBar, setShowSideBar] = useState(false);
  const displayNav = () => {
    setShowSideBar(!showSideBar)
    setShowCols(!showCols)
  }

  const wrapperClasses = ` ${showCols ? 'nm-convex-white-lg' : ' opacity-0' } 
                        transition-all ease-in-out duration-1000 rounded flex flex-col m-4`;
  const columnData = [
    { title: "To-Do", classes: { wrapperClasses } },
    { title: "In Progress", classes: { wrapperClasses } },
    { title: "Done", classes: { wrapperClasses } },
  ];

  const columns = map((x, index) => Column({ ...x, key: index }), columnData);

  const hamburgericonProps = {isOpen: showSideBar, displayFunction: displayNav}
  return (
    <div className="h-screen flex flex-auto items-center justify-center relative ">
      <div
        className={`transition-all ease-in-out duration-500 flex justify-center items-center h-full ${
          showSideBar ? "w-96" : "w-0"
        }`}
      ></div>
      <div className="w-full p-4 h-11/12 grid grid-cols-3">{columns}</div>
      <HamburgerIcon  {...hamburgericonProps}/>
    </div>
  );
};

export default Home;
