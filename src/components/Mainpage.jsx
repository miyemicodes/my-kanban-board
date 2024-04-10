import React from "react";
import Sidebar from "./Sidebar";
import Board from "./Board";

function MainPage() {
  return (
    <>
      <section className="flex w-full h-full divide-x divide-[#403f4e]">
        <Sidebar />
        <Board />
      </section>
    </>
  );
}

export default MainPage;
