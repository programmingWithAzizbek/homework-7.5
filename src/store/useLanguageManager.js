import { create } from "zustand";

function createLanguageManager(set) {
  const storageLanguage = localStorage.getItem("language") || "uz";

  return {
    language: storageLanguage,
    setLanguage: function (lang) {
      localStorage.setItem("language", lang);
      return set(() => {
        return { language: lang };
      });
    },
  };
}

const useLanguageManager = create(createLanguageManager);

export default useLanguageManager;
