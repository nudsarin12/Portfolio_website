"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { title: "Home", path: "#home" }, 
  { title: "About Me", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Experiences", path: "#experiences" },
  { title: "Skills", path: "#skills" },
  { title: "Contact Me", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (path) => {
    // ถ้าเป็นหน้า Home และอยู่ในหน้าแรกอยู่แล้ว
    if (path === "#home" && pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setNavbarOpen(false);
      return;
    }

    if (path === "#home" && pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 100);
      setNavbarOpen(false);
      return;
    }


    const target = document.querySelector(path);
    if (target) {
      const navbarHeight = navRef.current?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
    setNavbarOpen(false);
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    scrollToSection(path);
  };

  return (
    <nav 
      ref={navRef}
      className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100"
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-base md:text-base text-white font-semibold">
          {/* Logo */}
        </Link>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ml-auto">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink 
                  href={link.path} 
                  title={link.title}
                  onClick={(e) => handleNavClick(e, link.path)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {navbarOpen && (
        <MenuOverlay 
          links={navLinks} 
          onClick={scrollToSection}
        />
      )}
    </nav>
  );
};

export default Navbar;