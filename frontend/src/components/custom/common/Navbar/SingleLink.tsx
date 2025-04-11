import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface SingleLinkProps {
  label: string;
  icon?: React.ReactNode;
  path: string;
}

export const SingleLink: React.FC<SingleLinkProps> = ({
  label,
  icon,
  path,
}) => {
  const pathname = usePathname();

  return (
    <Link href={path}>
      <div
        className={`flex items-center gap-2 text-[1.02rem] py-[.5rem] border-r-[.2rem] hover:border-primary  duration-300 ${
          path === pathname
            ? "text-primary  border-primary font-[600] "
            : "border-transparent font-[400] "
        }`}
      >
        {icon && <span className=" text-[1.1rem] ">{icon}</span>}
        <span>{label}</span>
      </div>
    </Link>
  );
};
