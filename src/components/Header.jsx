import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between p-5">
          <NavLink to={"/"}>Home</NavLink>
          <nav>
            <ul className="flex items-center gap-x-5">
              <li>
                <NavLink to="/mode">Mode</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
