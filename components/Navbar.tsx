"use client";

import { Home, User } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GoProject } from "react-icons/go";
import { IoMdBook } from "react-icons/io";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Project", href: "#project", icon: GoProject },
  { name: "GuestBook", href: "#guestbook", icon: IoMdBook },
];

export default function BottomNavigation() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed bottom-0 left-0 w-full bg-black/60 backdrop-blur-lg text-white shadow-lg p-2 md:static md:top-0 md:left-0 md:w-full md:h-auto md:flex md:justify-center z-50`}
    >
      <ul className="flex justify-around md:justify-center md:gap-8">
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

// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { TiThMenu } from "react-icons/ti";
// import { IoIosCloseCircle } from "react-icons/io";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [isScrolled, setIsScrolled] = useState<boolean>(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 w-full px-6 md:px-16 z-40 flex justify-between items-center py-4 text-white transition-all duration-300 ${
//         isScrolled
//           ? "bg-neutral/10 backdrop-blur-lg shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="flex items-center">
//         <Image src="/samm4.png" alt="Logo" width={40} height={40} />
//       </div>

//       <button
//         className="md:hidden text-white focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <IoIosCloseCircle size={28} /> : <TiThMenu size={28} />}
//       </button>

//       <nav
//         className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gelap md:bg-transparent flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0 transition-all duration-300 ease-in-out transform ${
//           isOpen
//             ? "opacity-100 translate-y-0 scale-100"
//             : "opacity-0 -translate-y-5 scale-95 md:opacity-100 md:translate-y-0 md:scale-100 md:flex"
//         }`}
//       >
//         <Link href="#home" className="hover:text-green-400">
//           Beranda
//         </Link>
//         <Link href="#service" className="hover:text-green-400">
//           Service
//         </Link>
//         <Link href="#proyek" className="hover:text-green-400">
//           Proyek
//         </Link>
//         <Link href="#faq" className="hover:text-green-400">
//           Faq
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
