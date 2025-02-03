import { create } from "zustand";

function createModeManager(set) {
  return {
    mode: localStorage.getItem("mode") || "light",
    changeMode: function () {
      set((state) => {
        const newMode = state.mode == "light" ? "dark" : "light";
        localStorage.setItem("mode", newMode);
        document.documentElement.classList.toggle("dark", newMode == "dark");
        return { mode: newMode };
      });
    },
  };
}

const useModeManager = create((set) => {
  const initialMode = localStorage.getItem("mode") || "light";
  document.documentElement.classList.toggle("dark", initialMode == "dark");
  return createModeManager(set);
});

export default useModeManager;
