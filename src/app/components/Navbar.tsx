import React from "react";
import routes from "./routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathName = usePathname();

  return (
    <nav className="flex gap-4 text-[14px] px-4">
      {routes.map((link, index) => (
        <Link
          key={index}
          className={pathName  === link.path ? "font-medium text-primary p-2": "font-medium hover:text-primary p-2"}
          href={link.path}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
