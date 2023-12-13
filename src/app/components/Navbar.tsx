"use client";
import React from "react";
import { userRoutes, sellerRoutes, adminRoute } from "./routes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Route {
  label: string;
  path: string;
}

const Navbar: React.FC = () => {
  const pathName = usePathname();
  const router = useRouter();
  const userRole =
    typeof window !== "undefined" ? window.localStorage.getItem("role") : false;

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

  const routes = filterLinks() as Route[] | [];

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
