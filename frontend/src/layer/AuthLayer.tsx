"use client";

import { ReactNode, useEffect } from "react";
import useSession from "@/hooks/useSession";
import { usePathname, useRouter } from "next/navigation";
import CircleLoadingAnimation from "@/components/animation/CircleLoadingAnimation";

interface AuthLayerProps {
  children: ReactNode;
}

const AuthLayer: React.FC<AuthLayerProps> = ({ children }) => {
  const { user, loading, loggedIn } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const publicRoute: string[] = [
    "/auth/login",
    "/auth/register",
    "/blogs",
    "/blogs/[id]",
    "/about",
    "/contact",
    "/career",
    "/",
  ];
  const isPublicRoute = publicRoute.includes(pathname);

  console.log("Auth Layer rendering");

  useEffect(() => {
    if (!loading && !loggedIn && !isPublicRoute) {
      router.push("/auth/login");
    }
  }, [loading, loggedIn, isPublicRoute, router, pathname]);

  if (loading) {
    return (
      <div>
        <CircleLoadingAnimation />
      </div>
    );
  }

  // Prevent rendering protected content while redirecting
  if (!loggedIn && !isPublicRoute) {
    return null; // Ensures no flicker before redirect
  }

  return <div className="w-[100%]">{children}</div>;
};

export default AuthLayer;
