import { useState } from "react";
import Nav from '../components/nav/Nav'
import CardArea from '../components/cardArea/CardArea'

const Home = () => {
  const [showCols, setShowCols] = useState(true)
  const [showSideBar, setShowSideBar] = useState(false);
  const displayNav = () => {
    setShowSideBar(!showSideBar)
    setShowCols(!showCols)
  }


  const navProps = {isOpen: showSideBar, displayFunction: displayNav}
  const cardAreaProps = { showCols: !showSideBar }
  return (
    <div className="h-screen grid" style={{gridTemplateColumns: 'minmax(3.5rem, max-content) 4fr'}}>
      <Nav {...navProps} />
      <CardArea {...cardAreaProps}/>
    </div>
  );
};

export default Home;
