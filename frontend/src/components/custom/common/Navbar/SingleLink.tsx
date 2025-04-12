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

  // Split both the current path and the link path
  const pathSegments = pathname.split("/").filter(Boolean);
  const linkSegments = path.split("/").filter(Boolean);

  // For dashboard, it should only be active when exactly at /dashboard
  if (linkSegments[0] === "dashboard" && linkSegments.length === 1) {
    // Dashboard is active only when pathname is exactly /dashboard
    const isActive =
      pathSegments.length === 1 && pathSegments[0] === "dashboard";

    return renderLink(isActive);
  }

  // For other items, check if the specific section matches
  const isActive =
    pathSegments.length >= 2 &&
    pathSegments[0] === linkSegments[0] &&
    pathSegments[1] === linkSegments[1];

  return renderLink(isActive);

  function renderLink(isActive: boolean) {
    return (
      <Link href={path}>
        <div
          className={`flex items-center gap-2 text-[1.02rem] py-[.5rem] border-r-[.2rem] hover:border-primary duration-300 ${
            isActive
              ? "text-primary border-primary font-[600]"
              : "border-transparent font-[400]"
          }`}
        >
          {icon && <span className="text-[1.1rem]">{icon}</span>}
          <span>{label}</span>
        </div>
      </Link>
    );
  }
};
