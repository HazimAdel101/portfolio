"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  title: string;
};

export const NavLink = ({ href, title }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <h1 className={`text-2xl font-bold ${isActive ? "text-purple-700" : "text-black dark:text-white"}`}>
        {title}
      </h1>
    </Link>
  );
};
