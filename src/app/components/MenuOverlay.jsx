"use client";
import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClick }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink 
            href={link.path} 
            title={link.title}
            onClick={(e) => {
              e.preventDefault();
              onClick(link.path);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;