import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar from "./SideBar";

const UserLayout = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container mx-auto px-4 lg:px-14 py-10 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <Sidebar />
        <main className="w-full lg:w-3/4">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default UserLayout;
