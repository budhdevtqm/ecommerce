"use client";
import React, { useEffect, useState } from "react";
import { userRoutes, sellerRoutes, adminRoute } from "./routes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getUserRole, getUserEmail } from "../common-utils/common-fns";

interface Route {
  label: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [routes, setRoutes] = useState<Route[] | []>([]);
  const pathName = usePathname();
  const router = useRouter();
  const userRole = getUserRole();
  const userEmail = getUserEmail();

  const filterLinks = () => {
    if (!userRole) {
      router.push("/auth");
      return;
    }

    if (userRole === "admin") return adminRoute;
    if (userRole === "seller") return sellerRoutes;
    if (userRole === "user") return userRoutes;
    return [];
  };

  useEffect(() => {
    if (userRole && userEmail) {
      if (userRole) {
        const result = filterLinks();
        setRoutes(result as Route[]);
      }
    } else {
      localStorage.removeItem("userEmail");
      localStorage.removeItem("role");
      router.push("/auth");
    }
  }, [userRole]);

  return (
    <nav className="flex gap-4 text-[14px] px-4">
      {routes.length > 0 &&
        routes.map((link, index) => (
          <Link
            key={index}
            className={
              pathName === link.path
                ? "font-medium text-primary p-2"
                : "font-medium hover:text-primary p-2"
            }
            href={link.path}
          >
            {link.label}
          </Link>
        ))}
    </nav>
  );
};

export default Navbar;
