import React from "react";
import Header from "../components/Header.jsx";
import useLanguageManager from "../store/useLanguageManager";

function Language() {
  const { language, setLanguage } = useLanguageManager();

  const translation = {
    uz: {
      title: "Salom, dunyo!",
      subtitle: "Bu O'zbekcha til.",
    },
    ru: {
      title: "Привет, мир!",
      subtitle: "Это русский язык.",
    },
    en: {
      title: "Hello, world!",
      subtitle: "This is the English language.",
    },
  };

  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl w-full mx-auto p-5 flex justify-center">
          <div className="mt-40 flex flex-col items-center">
            <div className="mb-5">
              <button
                onClick={() => setLanguage("uz")}
                className="border px-4 py-2 rounded-md cursor-pointer bg-black text-white dark:bg-white dark:text-black"
              >
                O'zbekcha
              </button>
              <button
                onClick={() => setLanguage("ru")}
                className="border px-4 py-2 rounded-md cursor-pointer bg-black text-white dark:bg-white dark:text-black ml-2"
              >
                Русский
              </button>
              <button
                onClick={() => setLanguage("en")}
                className="border px-4 py-2 rounded-md cursor-pointer bg-black text-white dark:bg-white dark:text-black ml-2"
              >
                English
              </button>
            </div>

            <h2 className="text-black dark:text-white">
              {translation[language].title}
            </h2>
            <p className="text-black dark:text-white mt-2">
              {translation[language].subtitle}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Language;
