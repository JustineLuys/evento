"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];
export default function Header() {
  const activePathname = usePathname();
  return (
    <header className="flex justify-between items-center border-b px-3 sm:px-9  border-white/10 h-14">
      <Logo />
      <nav>
        <ul className="flex items-center gap-x-6 text-sm">
          {routes.map((route) => {
            const isActive = activePathname === route.path;
            return (
              <li
                key={route.path}
                className={cn(" hover:text-white relative transition", {
                  "text-white": isActive,
                  "text-white/50": !isActive,
                })}
              >
                <Link href={route.path}>{route.name}</Link>
                {isActive && (
                  <motion.div
                    layoutId="header-active-link"
                    className="bg-accent h-1 w-full absolute bottom--1"
                  ></motion.div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
