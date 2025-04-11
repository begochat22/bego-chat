import React from "react";
import { MdDashboard } from "react-icons/md";
import { TbBriefcase } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { IoReceiptOutline } from "react-icons/io5";
import { BsPieChart } from "react-icons/bs";
import { TbSettings2 } from "react-icons/tb";
import { FaUsersRectangle } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaUser, FaRegUser } from "react-icons/fa6";

export interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    label: "Dashboard",
    icon: <RxDashboard />,
    path: "/dashboard",
  },
  {
    label: "Blogs",
    icon: <LuNotebookPen />,
    path: "/dashboard/blog",
  },
  {
    label: "Analytics",
    icon: <TbBrandGoogleAnalytics />,
    path: "/dashboard/analytics",
  },
  {
    label: "Profile",
    icon: <FaRegUser />,
    path: "/dashboard/profile",
  },
];
