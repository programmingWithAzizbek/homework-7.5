import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between p-5">
          <NavLink
            to={"/"}
            className={
              "px-4 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black"
            }
          >
            Home
          </NavLink>
          <nav>
            <ul className="flex items-center gap-x-5">
              <li>
                <NavLink
                  to="/mode"
                  className={
                    "px-4 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black"
                  }
                >
                  Mode
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/todo"
                  className={
                    "px-4 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black"
                  }
                >
                  Todo
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
