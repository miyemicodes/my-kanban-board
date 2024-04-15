import React from "react";
import Header from "./Header";
import MainPage from "./Mainpage";
import StoreContextProvider from "./PopUp/Store-context";

function App() {
  return (
    <>
      
      <StoreContextProvider>
        <section className="w-screen h-lvh font-sans divide-y-2 divide-[#403f4e] overflow-x-hidden">
          <Header />
          <MainPage />
        </section>
      </StoreContextProvider>
    </>
  );
}

export default App;
