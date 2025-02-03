import React from "react";
import Header from "../components/Header";
import useModeManager from "../store/useModeManager";

function Mode() {
  const { mode, changeMode } = useModeManager();

  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl w-full mx-auto p-5 flex justify-center items-center">
          <button
            onClick={changeMode}
            className="cursor-pointer px-4 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black mt-40"
          >
            {mode == "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </main>
    </>
  );
}

export default Mode;
