"use client";

import Navbar from "@/components/custom/common/Navbar";
import { Sidebar } from "@/components/custom/common/Navbar/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-full h-[100vh] flex font-dm-sans  ">
      <Sidebar />
      <div className=" w-[calc(100%-16rem)] ">
        <div className=" h-[calc(100vh)] overflow-auto bg-primary-foreground ">
          {children}
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
