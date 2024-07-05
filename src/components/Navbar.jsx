import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/room1", label: "Room 1" },
    { path: "/room2", label: "Room 2" },
    { path: "/room3", label: "Room 3" },
    { path: "/room4", label: "Room 4" },
    { path: "/room5", label: "Room 5" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white z-10">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-lg font-bold">Codeventure</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
        <div
          className={`flex-col md:flex-row md:flex ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-full m-1 ${
                currentPath === item.path ? "bg-blue-600" : "bg-gray-800"
              } hover:bg-blue-700`}
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
