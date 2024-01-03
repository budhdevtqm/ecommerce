"use client";
import React from "react";
import Header from "../components/admin/Header";
import Footer from "../components/admin/Footer";
import SideNavbar from "../components/admin/SideNavbar";

interface PropsType {
  children: React.ReactNode;
}

const Layout: React.FC<PropsType> = ({ children }) => {
  return (
    <div className="min-w-[100vw] min-h-[100vh] flex flex-col">
      <Header />
      <main className="min-h-[87vh] overflow-x-hidden overflow-y-scroll bg-gray-200 flex">
        <SideNavbar />
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
