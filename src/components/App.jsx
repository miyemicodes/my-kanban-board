import React from "react";
import Header from "./Header";
import MainPage from "./Mainpage";

function App() {
  return (
    <>
      <section className="w-screen h-lvh font-sans divide-y-2 divide-[#403f4e] overflow-x-hidden">
        <Header />
        <MainPage />
      </section>
    </>
  );
}

export default App;
