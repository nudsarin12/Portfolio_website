"use client";
import Link from "next/link";
import React from "react";

const NavLink = ({ href, title, onClick, className = "" }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-primary ${className}`}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default NavLink;