import React from "react";

const NavBar = () => {
  return (
    <div className="bg-accent">
      <ul className= "flex justify-evenly border border-solid border-slate-800">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Experience</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="bg-cta"> Hello </div>
    </div>
    
  );
};

export default NavBar;
