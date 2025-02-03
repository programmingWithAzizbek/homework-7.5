import React from "react";
import Header from "../components/Header.jsx";

function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl w-full mx-auto p-5 text-center">
          <h1 className="mt-40 font-bold text-6xl dark:text-white">
            Welcome To My Homework
          </h1>
        </div>
      </main>
    </>
  );
}

export default Home;
