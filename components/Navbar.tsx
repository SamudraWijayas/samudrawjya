"use client";

import { useEffect, useState } from "react";
import { Home, User } from "lucide-react";
import Link from "next/link";
import { GoProject } from "react-icons/go";
import { IoMdBook } from "react-icons/io";

// Navigasi item
const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Project", href: "#project", icon: GoProject },
  { name: "GuestBook", href: "#guestbook", icon: IoMdBook },
];

export default function BottomNavigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgClass = scrolled
    ? "bg-black/20 backdrop-blur-lg"
    : "bg-gradient-to-r from-[#070417] via-[#190c34] to-[#070417]";

  return (
    <nav
      className={`fixed bottom-0 left-0 w-full text-white shadow-md p-2 transition-colors duration-300 z-100
      ${bgClass} md:static md:top-0 md:w-full md:h-auto md:flex md:justify-center`}
    >
      <ul className="flex flex-wrap justify-around md:justify-center md:gap-8">
        {navItems.map(({ name, href, icon: Icon }) => (
          <li key={name}>
            <Link
              href={href}
              className="flex flex-col md:flex-row items-center justify-center p-3 md:px-4 hover:text-green-500 transition-all"
            >
              <Icon className="w-6 h-6" />
              <span className="hidden md:inline ml-2">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
