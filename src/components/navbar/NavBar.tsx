import React from "react";

//FIXME: Achor tags need to be with appropriate links

/* TODO: colors need to be updated to color schema 
  -Additional styling needed
 */

const NavBar = () => {
  return (
    <div>
      <ul className= "flex justify-between border border-solid border-slate-800">
        <li className="border border-solid border-slate-800 px-5">
          <a href="">Home</a>
        </li>
        <li className="border border-solid border-slate-800 px-5">
          <a href="">About</a>
        </li>
        <li className="border border-solid border-slate-800 px-5">
          <a href="">Projects</a>
        </li>
        <li className="border border-solid border-slate-800 px-5">
          <a href="">Experience</a>
        </li>
        <li className="border border-solid border-slate-800 px-5">
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
    
  );
};

export default NavBar;
