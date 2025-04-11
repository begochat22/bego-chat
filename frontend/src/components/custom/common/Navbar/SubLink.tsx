import React from "react";
import { SingleLinkProps } from "./SingleLink";

import Link from "next/link";

interface SubLinkProps extends SingleLinkProps {
  children?: React.ReactNode;
}
const SubLink: React.FC<SubLinkProps> = ({ label, icon, path }) => {
  return (
    <Link href={path}>
      <div
        className={`flex items-center gap-2 px-4 py-[.4rem] rounded-[.3rem] ${
          typeof window !== "undefined" && window.location.pathname === path
            ? "text-white bg-orange-600"
            : "text-gray-700"
        } text-[.85rem] hover:bg-primary/10 hover:text-black duration-300`}
      >
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default SubLink;
