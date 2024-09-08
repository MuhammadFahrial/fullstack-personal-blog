import React from "react";
import SideBar from "../views/dashboard/sidebar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="flex flex-row ">
      <nav className="fixed">
        <SideBar />
      </nav>
      <div className="ml-64">
        <main className="p-14">{children}</main>
      </div>
    </div>
  );
};

export default LayoutDashboard;
