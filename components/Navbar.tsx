"use client";

import { Home, User } from "lucide-react"; // Hapus Settings
import Link from "next/link";
import { GoProject } from "react-icons/go";
import { IoMdBook } from "react-icons/io";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Project", href: "#project", icon: GoProject },
  { name: "GuestBook", href: "#guestbook", icon: IoMdBook },
];

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black/60 backdrop-blur-lg text-white shadow-lg p-2 overflow-x-hidden md:static md:top-0 md:left-0 md:w-full md:h-auto md:flex md:justify-center z-50">
      <ul className="flex flex-wrap justify-around md:justify-center md:gap-8">
        {navItems.map(({ name, href, icon: Icon }) => (
          <li key={name}>
            <Link
              href={href}
              className="flex flex-col md:flex-row items-center justify-center p-3 md:px-4 hover:text-green-600 rounded-lg"
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
