import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  return (
    <div
    className="bg-slate-300"
    >
      <header 
      className="w-full flex justify-center items-center text-2xl bg-slate-400 h-16 rounded-b-3xl">
        <h1
        > Header </h1>
      </header>

      <Outlet />
    </div>
  );
};

export default Layout;
