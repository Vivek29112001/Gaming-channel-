// import React from 'react'
import "../Assets/allindex.css";
import Button from "./Button";
import { BiSearchAlt2 } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* first part done */}
        <div className="logo">
          <h2>Game Class</h2>
        </div>
        {/* {second mainu part} */}
        <div className="search-bar">
            <div className="Search-container">
          < input type="text" placeholder="   Search..."  />
          <BiSearchAlt2/>
          </div>
          
        </div>
        {/* < search /> */}
        <Button />
      </nav>
    </>
  );
};

export default Navbar;
