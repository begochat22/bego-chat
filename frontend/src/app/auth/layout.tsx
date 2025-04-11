"use client";

import Navbar from "@/components/custom/common/Navbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className=" w-[100%] min-h-[100vh] relative    ">
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;
