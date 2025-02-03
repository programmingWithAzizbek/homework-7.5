import React from "react";
import Header from "../components/Header";
import useModeManager from "../store/useModeManager";

function Mode() {
  const { mode, changeMode } = useModeManager();

  return (
    <>
      <Header />
      <div className="flex h-screen items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        <button
          onClick={changeMode}
          className="px-4 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black cursor-pointer"
        >
          {mode == "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </>
  );
}

export default Mode;
