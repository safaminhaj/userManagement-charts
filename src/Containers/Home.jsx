import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { SidebarComp } from "../Components/SidebarComp/SidebarComp";
import { Users } from "../pages/Users";
import { Main } from "../pages/Main";

export const Home = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar />
        <div className="h-full w-full flex-1 flex overflow-hidden">
          <SidebarComp />

          <Routes>
            <Route path="users" element={<Users />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
