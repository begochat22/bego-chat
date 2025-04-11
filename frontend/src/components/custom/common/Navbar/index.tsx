"use client";

import { Skeleton } from "@/components/ui/skeleton";
import useSession from "@/hooks/useSession";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { loading, loggedIn } = useSession();

  const isActive = (href: string): boolean => {
    return pathname === href;
  };
  return (
    <div className=" w-full z-[10] sticky h-[4rem] top-0 bg-white font-dm-sans  flex justify-between px-16  shadow-sm  ">
      <div className="    flex items-center gap-[.5rem]  ">
        <Link href={"/"} className=" text-[1.3rem]  font-[500]  ">
          BegoChat
        </Link>
      </div>
      <div className="  flex justify-center items-center   gap-4 text-[1rem]  font-[500]  ">
        <Link
          href={"/"}
          className={` ${
            isActive("/")
              ? " text-primary font-[600] border-primary  "
              : " border-transparent"
          } hover:text-primary border-b-2    `}
        >
          Home
        </Link>
        <Link
          href={"/contact"}
          className={` ${
            isActive("/contact")
              ? " text-primary font-[600] border-primary  "
              : " border-transparent"
          } hover:text-primary border-b-2    `}
        >
          Contact
        </Link>
        <Link
          href={"/about"}
          className={` ${
            isActive("/about")
              ? " text-primary font-[600] border-primary  "
              : " border-transparent"
          } hover:text-primary border-b-2    `}
        >
          About
        </Link>
        <Link
          href={"/career"}
          className={` ${
            isActive("/career")
              ? " text-primary font-[600] border-primary  "
              : " border-transparent"
          } hover:text-primary border-b-2    `}
        >
          Career
        </Link>
        <Link
          href={"/ai-girlfriend-app"}
          className={` ${
            isActive("/ai-girlfriend-app")
              ? " text-primary font-[600] border-primary  "
              : " border-transparent"
          } hover:text-primary border-b-2    `}
        >
          AI Girlfriend App
        </Link>
      </div>
      <div className="  flex justify-center items-center       ">
        {loading ? (
          <Skeleton className=" mx-auto w-[5rem] h-[2.5rem] flex justify-center items-center  rounded-sm hover:opacity-75 duration-150 "></Skeleton>
        ) : !loading && loggedIn ? (
          <Link
            href={"/dashboard"}
            className=" mx-auto bg-primary min-w-[5rem] px-[1rem] h-[2.3rem] flex justify-center items-center text-white rounded-sm hover:opacity-75 duration-150 "
          >
            Dashboard
          </Link>
        ) : (
          <Link
            href={"/auth/login"}
            className=" mx-auto bg-primary w-[5rem] h-[2.5rem] flex justify-center items-center text-white rounded-sm hover:opacity-75 duration-150 "
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
