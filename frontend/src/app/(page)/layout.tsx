"use client";

import React from "react";

import Navbar from "../../components/custom/common/Navbar/index";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-[calc(100vh-4rem)] bg-primary-foreground flex justify-center items-center ">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
