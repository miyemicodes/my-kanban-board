import React from "react";
import Header from "./Header";
import MainPage from "./Mainpage";

function App() {
  return (
    <>
      <section className="w-screen h-screen font-sans divide-y-2 divide-[#403f4e]">
        <Header />
        <MainPage />
      </section>
    </>
  );
}

export default App;
