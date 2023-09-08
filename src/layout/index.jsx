import React from "react";

import Header from "./Header";
import Todo from "../pages/landing";

export default function BoardLayout() {

  return (
    <>
      <div className="flex w-full">
        
        <div className="w-full h-full">
          <header className="sticky top-0 shadow h-[76px] z-50 bg-[#fff] xl:px-6 lg:px-4 md:px-2 px-2">
            <Header />
          </header>
          <main className="h-auto ">
            <Todo />
          </main>
        </div>
      </div>
    </>
  );
}
