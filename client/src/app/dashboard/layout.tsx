import React, { ReactNode } from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Navbar from "@/components/dashboard/navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
        <Navbar />
      <div className="flex">
        <div className="hidden md:block h-[100vh] w-[300px]">
        <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[1140px]">
        {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
